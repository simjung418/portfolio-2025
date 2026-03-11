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
        // h3
        "prose-h3:text-2xl",
        "prose-h3:font-bold",
        "prose-h3:text-neutral-600",
        // hr
        "prose-hr:mb-13",
        "prose-hr:mt-25",
        "prose-hr:border-neutral-300",
        // p
        "prose-p:text-base",
        "prose-p:font-medium",
        "prose-p:my-4",
        "prose-p:leading-relaxed",
        // strong
        "prose-strong:text-green-500",
        // li
        "prose-li:text-base",
        "prose-li:font-medium",
        "md:prose-li:text-xl",
        "prose-li:my-4",
        "prose-li:leading-relaxed",
        // 반응형
        "md:prose-hr:mb-20",
        "md:prose-hr:mt-20",
        "md:prose-h3:text-4xl",
        "md:prose-p:text-xl",
        "md:prose-li:text-xl",
      )}
    >
      {children}
    </article>
  );
}
