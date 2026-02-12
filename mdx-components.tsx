import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}

export const mdxComponents = {
  a: ({ href, children, ...props }: Props) => {
    const isInternal = href?.startsWith("/");
console.log(ctaBtnClassMap)
    if (isInternal) {
      return (
        <Link
          href={href}
          className={clsx(ctaBtnClassMap.base, ctaBtnClassMap.active)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 underline"
        {...props}
      >
        {children}
      </a>
    );
  },
};
