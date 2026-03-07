"use client";

import { ReactNode, useState } from "react";
import { Footer, Navigation, SectionTitle, CurvedGridBackground } from "@/components/ui";

type Prop = {
  children: ReactNode;
};

export default function LayoutShell({ children }: Prop) {
  const [bgReady, setBgReady] = useState(false);

  return (
    <>
      <CurvedGridBackground onReady={() => setBgReady(true)} />
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
        <SectionTitle play={bgReady} />
      </header>
      <div>{children}</div>
      <Footer />
    </>
  );
}
