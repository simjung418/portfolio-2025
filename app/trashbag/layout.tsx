import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/ui/";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "TrashBag | SJM Portfolio",
    default: "SJM Portfolio"
  },
  description: "Portfolio built with Next.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const API_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services,clusterer&autoload=false`;
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl px-4 antialiased md:py-8">
        <Script
          src={API_URL}
          strategy="beforeInteractive"
        />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
