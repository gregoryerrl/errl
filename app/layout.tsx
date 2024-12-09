import type { Metadata } from "next";
import { Inter, Inconsolata, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/root-components/shadcn/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify-sans",
});

export const metadata: Metadata = {
  title: "Errl",
  description: "Portfolio of Gregory Errl - Web Developer and Designer",
  keywords: ["portfolio", "web development", "design", "Gregory Errl"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable} ${pixelify.variable}`}
    >
      <body
        className={`${inter.variable} ${inconsolata.variable} ${pixelify.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow flex flex-col font-inconsolata max-w-screen overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
