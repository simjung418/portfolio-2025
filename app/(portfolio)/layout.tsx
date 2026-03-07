import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/app/globals.css";
import Shell from "@/components/ui/LayoutShell.client";
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
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
