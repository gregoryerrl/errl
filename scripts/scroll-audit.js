/**
 * scroll-audit.js — pixel-resolution scroll diagnostics for GSAP ScrollTrigger pages.
 *
 * WHY: "the scroll feels heavy at each animation" is hard to debug because the page
 * looks fine at rest. This walks the page one pixel at a time and records, at every
 * position, which ScrollTriggers are active, what their scrub progress is, and how
 * far the rendered content actually moved. Regions where you scroll but nothing
 * moves are exactly the "heavy" spots.
 *
 * IMPORTANT: load the page with ?audit in the URL (e.g. /animated?audit). GSAP is
 * module-bundled and is NOT on window otherwise, so the audit cannot see any
 * triggers without it. The hook lives in app/animated/page.tsx and is inert
 * without the query param.
 *
 * USAGE — paste this whole file into the DevTools console on the page, then:
 *
 *   scrollAudit()                    // 1px steps, prints the summary tables
 *   scrollAudit({ step: 4 })         // faster, coarser
 *   scrollAudit({ raw: true })       // also returns the per-pixel array
 *   copy(JSON.stringify(window.__scrollAuditLast))   // grab the full data
 *
 * Returns a promise resolving to the report object; also stored on
 * window.__scrollAuditLast.
 */
(function () {
  const ST =
    window.ScrollTrigger ||
    (window.gsap && window.gsap.core && window.gsap.core.globals().ScrollTrigger);

  async function scrollAudit(opts = {}) {
    const step = opts.step ?? 1;
    const raw = opts.raw ?? false;
    const settleMs = opts.settleMs ?? 900;

    if (!ST) {
      console.error(
        "[scroll-audit] ScrollTrigger not found on window. Run this on a page that uses GSAP ScrollTrigger."
      );
      return null;
    }

    const vh = window.innerHeight;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    // ScrollTrigger builds pin-spacers lazily. Measuring before it settles gives a
    // page height that is too small, so force a full pass first.
    window.scrollTo({ top: 0, behavior: "instant" });
    await sleep(300);
    window.scrollTo({ top: 999999, behavior: "instant" });
    await sleep(settleMs);
    window.scrollTo({ top: 0, behavior: "instant" });
    await sleep(settleMs);
    ST.refresh();
    await sleep(settleMs);

    const maxScroll = document.documentElement.scrollHeight - vh;
    const triggers = ST.getAll();

    // Elements whose on-screen position tells us whether the page visually moved.
    const probes = [...document.querySelectorAll("section, .intro, .introScreen, .resume, .space, .portfolioTrigger, .info")]
      .map((el, i) => ({ i, el, label: el.className ? String(el.className).split(/\s+/)[0] : el.tagName }));

    const samples = [];
    let prevTops = null;

    for (let y = 0; y <= maxScroll; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      ST.update();

      // Weight each probe by how much of the VIEWPORT it occupies. A plain average
      // across all probes hides a pin: the one frozen element gets diluted by the
      // several off-screen ones that are still moving, and the dead zone vanishes
      // from the report. Only what is actually on screen can feel heavy.
      const cur = probes.map((p) => {
        const r = p.el.getBoundingClientRect();
        return { top: r.top, cover: Math.max(0, Math.min(vh, r.bottom) - Math.max(0, r.top)) };
      });
      let moved = 0;
      if (prevTops) {
        let weighted = 0;
        let wsum = 0;
        for (let i = 0; i < cur.length; i++) {
          const w = cur[i].cover;
          if (w > 0 && prevTops[i].cover > 0) {
            weighted += Math.abs(cur[i].top - prevTops[i].top) * w;
            wsum += w;
          }
        }
        moved = wsum ? weighted / wsum : step; // nothing on screen -> assume normal
      }
      prevTops = cur;

      const active = [];
      for (const t of triggers) {
        if (y >= t.start && y <= t.end) {
          active.push({
            trigger: describeTrigger(t),
            progress: +t.progress.toFixed(4),
            pinned: !!t.pin,
          });
        }
      }

      samples.push({
        y,
        moved: +moved.toFixed(2),
        // ratio 1 = content tracks the scroll normally; 0 = visually frozen
        ratio: step ? +(moved / step).toFixed(3) : 0,
        activeCount: active.length,
        pinnedCount: active.filter((a) => a.pinned).length,
        active,
      });
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    const report = buildReport({ samples, triggers, maxScroll, vh, step });
    report.raw = raw ? samples : undefined;
    window.__scrollAuditLast = { report, samples };

    print(report);
    return report;
  }

  function describeTrigger(t) {
    const el = t.trigger;
    if (!el) return "(none)";
    if (el.className && String(el.className).trim()) {
      return "." + String(el.className).trim().split(/\s+/)[0];
    }
    return el.tagName.toLowerCase();
  }

  function buildReport({ samples, triggers, maxScroll, vh, step }) {
    // Contiguous runs where the page barely moves despite scrolling — the "heavy" zones.
    const STUCK = 0.25;
    const dead = [];
    let run = null;
    for (const s of samples) {
      if (s.ratio < STUCK) {
        if (!run) run = { fromPx: s.y, toPx: s.y, triggers: new Set() };
        run.toPx = s.y;
        s.active.forEach((a) => run.triggers.add(a.trigger + (a.pinned ? " (PINNED)" : "")));
      } else if (run) {
        dead.push(run);
        run = null;
      }
    }
    if (run) dead.push(run);

    const deadZones = dead
      .map((d) => ({
        fromPx: d.fromPx,
        toPx: d.toPx,
        lengthPx: d.toPx - d.fromPx + step,
        lengthScreens: +((d.toPx - d.fromPx + step) / vh).toFixed(2),
        heldBy: [...d.triggers],
      }))
      // ignore sub-quarter-screen blips; they are not perceptible as "heavy"
      .filter((d) => d.lengthPx > vh * 0.25)
      .sort((a, b) => b.lengthPx - a.lengthPx);

    const triggerTable = triggers
      .map((t) => ({
        trigger: describeTrigger(t),
        startPx: Math.round(t.start),
        endPx: Math.round(t.end),
        spanPx: Math.round(t.end - t.start),
        spanScreens: +((t.end - t.start) / vh).toFixed(2),
        pinned: !!t.pin,
        scrub: t.scrub !== undefined && t.scrub !== false,
      }))
      .sort((a, b) => a.startPx - b.startPx);

    // Where many scrubs overlap, one scroll gesture drives several timelines at once.
    const overlap = samples
      .filter((s) => s.activeCount >= 3)
      .reduce((acc, s) => {
        const last = acc[acc.length - 1];
        if (last && s.y - last.toPx <= step * 2) {
          last.toPx = s.y;
          last.peak = Math.max(last.peak, s.activeCount);
        } else acc.push({ fromPx: s.y, toPx: s.y, peak: s.activeCount });
        return acc;
      }, [])
      .filter((o) => o.toPx - o.fromPx > vh * 0.2);

    return {
      pageHeightPx: maxScroll + vh,
      pageScreens: +((maxScroll + vh) / vh).toFixed(2),
      viewportPx: vh,
      stepPx: step,
      samplesTaken: samples.length,
      triggerCount: triggers.length,
      deadZones,
      totalDeadPx: deadZones.reduce((a, d) => a + d.lengthPx, 0),
      totalDeadScreens: +(
        deadZones.reduce((a, d) => a + d.lengthPx, 0) / vh
      ).toFixed(2),
      triggerTable,
      heavyOverlapRegions: overlap,
    };
  }

  function print(r) {
    console.log(
      `%c[scroll-audit] ${r.pageScreens} screens · ${r.triggerCount} ScrollTriggers · ${r.samplesTaken} samples @ ${r.stepPx}px`,
      "font-weight:bold"
    );
    console.log(
      `%cDead zones (scroll moves, page doesn't): ${r.totalDeadScreens} screens total`,
      "font-weight:bold;color:#c00"
    );
    if (r.deadZones.length) console.table(r.deadZones);
    else console.log("  none");
    console.log("%cScrollTriggers", "font-weight:bold");
    console.table(r.triggerTable);
    if (r.heavyOverlapRegions.length) {
      console.log("%cRegions with 3+ concurrent triggers", "font-weight:bold;color:#b60");
      console.table(r.heavyOverlapRegions);
    }
  }

  window.scrollAudit = scrollAudit;
  console.log("[scroll-audit] loaded — run: scrollAudit()  |  scrollAudit({step:4})");
})();
