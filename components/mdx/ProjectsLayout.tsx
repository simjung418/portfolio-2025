import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function AboutLayout({ children }: Props) {
  return (
    <article
      className={clsx(
        "prose",
        "prose-neutral",
        "mt-8",
        "max-w-none",
        // h2
        "prose-h2:my-8!",
        // h3
        "prose-h3:text-lg",
        "prose-h3:font-bold",
        "prose-h3:text-neutral-400",
        "prose-h3:capitalize",
        // hr
        "prose-hr:my-8",
        "prose-hr:border-neutral-300",
        // p
        "prose-p:text-base",
        "prose-p:font-medium",
        "prose-p:my-4",
        "prose-p:leading-relaxed",
        // strong
        "prose-strong:text-green-600",
        // li
        "prose-li:text-base",
        "prose-li:font-medium",
        "prose-li:my-4",
        "prose-li:leading-relaxed",
        // 반응형
        "md:prose-h3:text-3xl",
        "md:prose-p:text-2xl/10",
        "md:prose-li:text-2xl/10",
        "md:prose-hr:my-13",
      )}
    >
      {children}
    </article>
  );
}
