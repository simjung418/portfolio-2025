import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/app/globals.css";
import { Navigation, SectionTitle, Footer, CurvedGridBackground } from "@/components/ui/";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    template: "%s | SJM Portfolio",
    default: "SJM Portfolio",
  },
  description: "Portfolio built with Next.js",
};

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `relative mx-auto max-w-7xl px-4 py-6 antialiased md:px-6 md:py-8`,
          orbitron.variable,
        )}
      >
        <CurvedGridBackground />
        {/* viewport에 고정 */}
        <div className="fixed inset-x-0 top-6 z-50">
          {/* 가운데 정렬된 max-width 컨테이너 */}
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            {/* 컨테이너 기준 right */}
            <div className="absolute right-4 md:right-6">
              <Navigation />
            </div>
          </div>
        </div>
        <header className="mb-8 flex">
          <SectionTitle />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
