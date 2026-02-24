import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

function MdxA(props: React.ComponentPropsWithoutRef<"a">) {
  const { href, children, ...rest } = props;

  // ✅ href 없으면 그냥 a 렌더 (또는 span으로 렌더해도 됨)
  if (!href) {
    return <a {...rest}>{children}</a>;
  }

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    // 내부 링크면 Next Link
    return (
      <Link
        href={href}
        className={clsx(
          ctaBtnClassMap.base,
          ctaBtnClassMap.active,
          "h-16 w-auto rounded-md py-3 text-center text-xl no-underline md:inline-flex! md:px-6 md:py-5 md:text-xl",
        )}
        {...(rest as any)}
      >
        {children}
      </Link>
    );
  }

  // 외부 링크면 a + 보안 속성
  return (
    <a
      href={href}
      target={rest.target ?? "_blank"}
      rel={rest.rel ?? "noopener noreferrer"}
      className={clsx(
        ctaBtnClassMap.base,
        ctaBtnClassMap.active,
        "h-16 w-fit rounded-md py-3 text-center text-xl no-underline md:px-6 md:py-5 md:text-xl",
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

const mdxComponents: MDXComponents = {
  a: MdxA,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
