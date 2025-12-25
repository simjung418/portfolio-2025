import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import { TitleProvider } from "@/providers/TitleContext";
import SectionTitle from "@/components/ui/SectionTitle";

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
      <body className={`${orbitron.variable} antialiased`}>
        <Navigation />
        <TitleProvider>
          <SectionTitle />
          <div className="px-5 py-8">{children}</div>
        </TitleProvider>
      </body>
    </html>
  );
}
