"use client";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-20"
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-3xl mb-2">Did you notice?</span>
          <span className="text-center">
            This portfolio has a bit of a Video-Game Interface vibe to it.
            That&apos;s because gaming is my hobby! And I want to develop
            videogames someday!
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-10"
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-3xl mb-2">
            Details you might want to know about me
          </span>
          <span>
            I made this section a little bit different from the usual!
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-10"
      >
        <div className="flex flex-col">
          <span className="text-3xl mb-8">My Strengths and Weaknesses</span>
          <span className="text-xl">Strengths</span>
          <span>
            I am a sponge for knowledge, yet organized. I can learn things very
            quickly, but in a systemized way. For example when learning a new
            language or framework, I prioritize reading the official
            documentations, then search online for examples I can use. Then the
            rest is practice.
          </span>
          <span className="text-xl mt-8">Weaknesses</span>
          <span>
            Hyperfixation - I tend to get overfocused when I am immersed on
            something. This can take a toll on my health. But for my clients,
            its a plus!
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-10"
      >
        <div className="flex flex-col">
          <span className="text-3xl mb-8">Developer FAQs and my answers</span>
          <span className="text-xl">
            &quot;How did you become interested in web development?&quot;
          </span>
          <span>
            I love coding itself. Whether it&apos;s software or web development.
            I love that feeling when your code just works smoothly. It&apos;s
            like I&apos;ve achieved or acquired something
          </span>
          <span className="text-xl mt-8">
            &quot;What do you do if you can&apos;t work out a coding issue by
            yourself?&quot;
          </span>
          <span>
            Not to brag but this rarely happens. Sometimes it does take a little
            longer for me to solve a difficult coding issue. That&apos;s where
            my hyperfixation strives. But when it does happen. I use chatGPT.
            But I don&apos;t use it to write the code for me, I make it explain
            what my mistake is to not let it happen again in the future
          </span>
          <span className="text-xl mt-8">
            &quot;What are your thoughts on ChatGPT and other generative
            AIs?&quot;
          </span>
          <span>
            I think they&apos;re great as a tool! I don&apos;t think they can
            replace developers yet. After all, they can&apos;t see what us
            humans can when it comes to arts and design.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-10"
      >
        <div className="flex w-full items-center">
          <div className="flex flex-col w-1/3">
            <span className="text-3xl mb-8">Other Details</span>
            <span className="text-xl">Pass-time Hobbies</span>
            <span>Gaming</span>
            <span>Literature</span>
            <span>Films and TV Shows</span>
            <span className="text-xl mt-8">Creative Hobbies</span>
            <span>Photography</span>
            <span>Pixel Arts</span>
            <span>Cooking</span>
            <span>3D Design and Printing</span>
            <span className="text-xl mt-8">Sports</span>
            <span>Combat Sports / Mixed-Martial Arts</span>
          </div>

          <div className="w-2/3 flex flex-col space-y-3">
            <Link
              href="/files/gregoryerrl.pdf"
              download="GregoryErrl_Resume.pdf"
              target="_blank"
              className="hover:text-blue-600 transition duration-300 flex gap-x-2 mb-10"
            >
              Download my latest CV <Download />
            </Link>
            <span className="text-xl">Send me a message!</span>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
