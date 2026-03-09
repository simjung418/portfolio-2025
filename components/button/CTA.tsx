import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { ctaBtnClassMap } from "@/lib/portfolio/classNameMap";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  active: boolean;
};

export function CTA({ href, active, children, ...props }: Props) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const classMap = active
    ? clsx(
        ctaBtnClassMap.base,
        ctaBtnClassMap.active,
        "w-full flex-1 justify-center rounded-md py-3 text-center md:w-fit md:flex-none md:px-6 md:py-5 md:text-xl",
        props.className
      )
    : clsx(
        ctaBtnClassMap.base,
        ctaBtnClassMap.inactive,
        "w-full flex-1 justify-center rounded-md py-3 text-center md:w-fit md:flex-none md:px-6 md:py-5 md:text-xl",
        props.className
      );
  return (
    <Link href={href} {...props} className={classMap}>
      <div>{children}</div>
      {isInternal ? <ArrowRightIcon className="size-5" /> : <ArrowUpRightIcon className="size-5" />}
    </Link>
  );
}
