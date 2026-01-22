"use client";

import { usePathname } from "next/navigation";
import { RoutePath, ROUTES } from "@/lib/types";

export const SectionTitle = () => {
  const path = usePathname() as RoutePath;
  const { title, h1 } = ROUTES[path];
  console.log(typeof h1)
  return (
    <h1
      className={`my-3 origin-left scale-x-200 text-3xl text-neutral-300 sm:text-7xl`}
    >
      {h1.split("").map((char, index) => (
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
