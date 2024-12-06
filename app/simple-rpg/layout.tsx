import Nav from "./rpg-components/Nav";
import "../globals.css";

export default function SimpleRPGLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="relative z-10 flex flex-col w-full px-4 sm:px-6 py-4 min-h-screen font-tiny5">
        <Nav />
        <section className="flex-grow flex flex-col max-w-screen">
          {children}
        </section>
      </div>
    </section>
  );
}
