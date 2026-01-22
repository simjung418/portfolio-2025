import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Navigation, SectionTitle, Footer } from "@/components/ui/";

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
      <body className={`${orbitron.variable} antialiased md:px-4 md:py-8 md:mx-auto max-w-7xl`}>
        <div className="flex justify-between items-center">
          <SectionTitle />
          <Navigation />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
