"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";

const links: Record<MenuNames, LinkDetails> = {
  home: {
    route: "/",
    title: "Home",
  },
  about: {
    route: "/about",
    title: "About",
  },
  skills: {
    route: "/skill",
    title: "Skills",
  },
  projects: {
    route: "/projects",
    title: "Projects",
  },
  career: {
    route: "/career",
    title: "Career",
  },
  // contact: {
  //   route: "/todos",
  //   title: "Contact",
  // },
};

const menus = ["home", "about", "skills", "projects", "career"];

type MenuNames = (typeof menus)[number];

type LinkDetails = {
  route: string;
  title: string;
};

export const Navigation = () => {
  const [isNavOpening, setIsNavOpening] = useState(false);
  const path = usePathname();
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
  useEffect(()=>{
    setIsNavOpening(false);
  },[path])
  return (
    <div ref={navRef} className="relative">
      <button
        onClick={() => setIsNavOpening((prev) => !prev)}
        className="flex size-20 items-center justify-center rounded-full border border-neutral-500"
      >
        <Bars3Icon className="size-10" />
      </button>
      <ul
        className={`absolute z-100 mt-4 flex flex-col gap-5 rounded-2xl bg-neutral-50/70 p-3 shadow-[0_0_30px] shadow-green-400/15 backdrop-blur-md transition-all duration-200 ${
          isNavOpening
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {menus.map((menu) => {
          const link = links[menu];
          return (
            <li key={menu} className="cursor-pointer">
              <Link
                className={`px-2 py-1 text-2xl font-medium  hover:text-neutral-500 active:text-neutral-600 ${path === link.route ? "text-green-500" : "text-neutral-400"}`}
                href={link.route}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
