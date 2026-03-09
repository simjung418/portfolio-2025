import type { MDXComponents } from "mdx/types";
import { CTA } from "./components/button/CTA";

function MdxA(props: React.ComponentPropsWithoutRef<"a">) {
  const { href, children, ...rest } = props;

  if (!href) {
    return <a {...rest}>{children}</a>;
  }

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <CTA
        href={href}
        {...rest}
        className="h-16 w-auto rounded-md py-3 text-center text-xl no-underline md:inline-flex! md:px-6 md:py-5 md:text-xl"
        active={true}
      >
        {children}
      </CTA>
    );
  }

  // 외부 링크면 a + 보안 속성
  return (
    <CTA
      href={href}
      target={rest.target ?? "_blank"}
      rel={rest.rel ?? "noopener noreferrer"}
      {...rest}
      className="h-16 w-auto rounded-md py-3 text-center text-xl no-underline md:inline-flex! md:px-6 md:py-5 md:text-xl"
      active={true}
    >
      {children}
    </CTA>
  );
}

const mdxComponents: MDXComponents = {
  a: MdxA
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents
  };
}
