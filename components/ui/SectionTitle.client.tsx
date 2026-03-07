"use client";

import { usePathname } from "next/navigation";
import { RoutePath, ROUTES } from "@/lib/portfolio/routes";

type Prop = {
  /**
   * When false, the title is rendered without running the CSS animation.
   * When it flips to true, we remount spans to restart the animation cleanly.
   */
  play?: boolean;
};

export const SectionTitle = ({ play = true }: Prop) => {
  const path = usePathname() as RoutePath;
  const title = ROUTES[path];

  return (
    <h1 className="my-3 origin-left scale-x-200 text-3xl text-neutral-300 md:text-6xl">
      {title.split("").map((char, index) => (
        <span
          key={`${title}-${index}`}
          className={play ? "animate-font inline-block text-neutral-300" : "inline-block text-neutral-300"}
          style={
            play
              ? { animationDelay: `${(index + 1) * 0.15}s` }
              : {
                  // hard-disable animation while background is loading
                  animation: "none"
                }
          }
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
