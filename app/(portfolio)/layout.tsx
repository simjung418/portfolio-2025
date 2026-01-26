import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/app/globals.css";
import { Navigation, SectionTitle, Footer } from "@/components/ui/";
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
          `mx-auto max-w-7xl px-4 antialiased md:py-8`,
          orbitron.variable,
        )}
      >
        <div className="flex items-center justify-between">
          <SectionTitle />
          <Navigation />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
