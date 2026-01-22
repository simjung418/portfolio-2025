"use client";

import { usePathname } from "next/navigation";

const TITLE_MAP: Record<string, string> = {
  "/": "Home",
  "/about": "About me",
  "/skills": "Skills",
  "/projects": "Projects",
  "/career": "Career",
  "/todos": "Todos",
};

export const SectionTitle = () => {
  const path = usePathname();
  const title = TITLE_MAP[path] ?? "";

  return (
    <h1
      className={`my-3 origin-left scale-x-200 text-3xl text-neutral-300 sm:text-7xl`}
    >
      {title.split("").map((char, index) => (
        <span
          key={`${title}-${index}`}
          className={`animate-font inline-block text-neutral-300`}
          style={{ animationDelay: `${(index + 1) * 0.15}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
