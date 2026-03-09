"use client";

import { ReactNode, useEffect, useState } from "react";
import { Footer, Navigation, SectionTitle, CurvedGridBackground } from "@/components/ui";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

type Prop = {
  children: ReactNode;
};

export default function LayoutShell({ children }: Prop) {
  const [bgReady, setBgReady] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <CurvedGridBackground onReady={() => setBgReady(true)} />
      {/* viewport에 고정 */}
      <div className="top-6 fixed inset-x-0 z-50">
        {/* 가운데 정렬된 max-width 컨테이너 */}
        <div className="max-w-7xl md:px-6 relative px-4 mx-auto">
          {/* 컨테이너 기준 right */}
          <div className="right-4 md:right-6 absolute">
            <Navigation />
          </div>
        </div>
      </div>
      <header className="flex mb-8">
        <SectionTitle play={bgReady} />
      </header>
      <div>{children}</div>
      <div className="bottom-18 md:bottom-22 fixed inset-x-0 z-50">
        {/* 가운데 정렬된 max-width 컨테이너 */}
        <div className="max-w-7xl md:px-6 relative px-4 mx-auto">
          {/* 컨테이너 기준 right */}
          <div className="right-4 md:right-6 absolute">
            <button
              onClick={scrollToTop}
              className={clsx(
                "flex size-12 items-center justify-center rounded-full p-2 shadow-sm backdrop-blur-xs md:size-16 transition-all hover:scale-110",
                showTopBtn ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <ArrowUpIcon className="size-6 md:size-8" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
