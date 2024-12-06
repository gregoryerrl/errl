import Nav from "./components/Nav";
import "../globals.css";
import { AuroraBackground } from "./components/aurora-background";

export default function SimpleRPGLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AuroraBackground>
        <div className="relative z-10 flex flex-col w-full px-4 sm:px-6 py-4 min-h-screen">
          <Nav />
          <section className="flex-grow flex flex-col font-inconsolata max-w-screen">
            {children}
          </section>
        </div>
      </AuroraBackground>
    </section>
  );
}
