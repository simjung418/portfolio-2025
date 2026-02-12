import Link from "next/link";
import { ReactNode } from "react";
import { ctaBtnClassMap } from "./ctaBtnClassMap"
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
}

export function CTA({ href, children }: Props) {
  return (
    <Link
      href={href}
      className={clsx(ctaBtnClassMap.base, ctaBtnClassMap.active)}
    >
      {children}
    </Link>
  );
}