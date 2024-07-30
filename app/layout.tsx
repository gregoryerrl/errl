import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/shadcn/theme-provider";
import Nav from "./components/Nav";
import { AuroraBackground } from "./components/aurora-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Errl",
  description: "Portfolio of Gregory Errl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden md:block min-w-[100vw] min-h-screen overflow-x-hidden">
            <div className="flex flex-col z-50 absolute w-full px-6 py-4 min-h-screen space-y-5">
              <Nav />
              <div className="min-h-[70vh] flex flex-col font-consolas">
                {children}
              </div>
            </div>
            <AuroraBackground>
              <div></div>
            </AuroraBackground>
          </div>

          <div className="flex md:hidden min-h-screen min-w-screen justify-center items-center">
            Sorry, this portfolio is not yet available on mobile
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
