import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/ui/";

export const metadata: Metadata = {
  title: {
    template: "TrashBag | SJM Portfolio",
    default: "SJM Portfolio",
  },
  description: "Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl px-4 antialiased md:py-8">
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
