import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function ArticleLayout({ children }: Props) {
  return (
    <article
      className={clsx(
        "prose",
        "prose-neutral",
        "mt-8",
        "max-w-none",
        // h3
        "prose-h3:text-2xl",
        "prose-h3:font-bold",
        "prose-h3:text-neutral-600",
        // p
        "prose-hr:my-13",
        "prose-p:text-md",
        "prose-p:font-medium",
        "prose-p:my-4",
        "prose-p:leading-relaxed",
        // li
        "prose-li:text-md",
        "prose-li:font-medium",
        "md:prose-li:text-xl",
        "prose-li:my-4",
        "prose-li:leading-relaxed",
        // 반응형
        "md:prose-h3:text-4xl",
        "md:prose-p:text-xl",
        "md:prose-li:text-xl",
      )}
    >
      {children}
    </article>
  );
}
