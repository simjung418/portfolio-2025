import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/app/globals.css";
import { Navigation, SectionTitle, Footer } from "@/components/ui/";
import clsx from "clsx";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

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
        <div className="absolute top-0 left-0 -z-10 h-full w-dvw overflow-hidden">
          <GlobeAltIcon className="absolute -right-100 size-400 font-light text-neutral-200/30" />
        </div>
        <header className="mb-8 flex items-center justify-between">
          <SectionTitle />
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
