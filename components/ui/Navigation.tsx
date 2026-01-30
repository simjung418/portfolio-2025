"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { RoutePath, ROUTES } from "@/lib/types";
import clsx from "clsx";

const navClassMap = {
  base: "absolute right-0 z-100 mt-4 flex flex-col gap-5 rounded-2xl bg-neutral-50/70 p-3 shadow-[0_0_30px] shadow-green-400/15 backdrop-blur-md transition-all duration-200 xl:-right-8",
  opened: "pointer-events-auto translate-y-0 opacity-100",
  closed: "pointer-events-none -translate-y-2 opacity-0",
};

const routeClassMap = {
  base: "ease px-2 py-0.5 text-lg font-medium transition-colors md:py-1 md:text-2xl",
  active: "text-green-500 hover:text-green-600",
  inactive: "text-neutral-400 hover:text-neutral-500 active:text-neutral-600",
};

export const Navigation = () => {
  const [isNavOpening, setIsNavOpening] = useState(false);
  const path = usePathname() as RoutePath;
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setIsNavOpening(false);
      }
    };
    if (isNavOpening) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpening]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsNavOpening(false);
      }
    };
    if (isNavOpening) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavOpening]);
  useEffect(() => {
    setIsNavOpening(false);
  }, [path]);
  return (
    <div ref={navRef} className="relative">
      <button
        onClick={() => setIsNavOpening((prev) => !prev)}
        // className="flex size-20 items-center justify-center rounded-full border border-neutral-500"
        className={clsx(
          `group shadowed-button relative flex size-12 items-center justify-center rounded-full transition-all md:size-16`,
          isNavOpening && "clicked",
        )}
      >
        <Bars3Icon className="size-6 text-neutral-300 transition-colors md:size-8" />
      </button>
      <ul
        className={clsx(
          navClassMap.base,
          isNavOpening ? navClassMap.opened : navClassMap.closed,
        )}
      >
        {Object.entries(ROUTES).map(([route, meta]) => {
          return (
            <li key={route} className="cursor-pointer">
              <Link
                className={clsx(
                  routeClassMap.base,
                  path === route
                    ? routeClassMap.active
                    : routeClassMap.inactive,
                )}
                href={route}
              >
                {meta.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
