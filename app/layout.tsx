import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/shadcn/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
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
    <html lang="en" className={`${inter.variable} ${inconsolata.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow flex flex-col font-inconsolata max-w-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
