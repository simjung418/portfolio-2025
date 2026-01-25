
import { Metadata } from "next";
import AboutContent from "./content.mdx";

export const metadata: Metadata = {
  title: "Aboutme",
};

export default function AboutPage() {
  return (
    <>
      <article className="prose prose-neutral sm:prose-h3:text-4xl prose-h3:text-2xl prose-h3:font-bold prose-h3:text-neutral-800 prose-hr:my-13 prose-p:text-md prose-p:font-medium sm:prose-p:text-xl prose-p:my-4 prose-p:leading-relaxed mt-8 max-w-none">
        <div className="[&_p]:max-w-[70ch] [&_p]:indent-2">
          <AboutContent />
        </div>
      </article>
    </>
  );
}
/* // PARKING 가독성 조정 */
{
  /* <ul className="mt-8 sm:gap-7 gap-4 **:[&_dl]:flex **:[&_dl]:flex-col **:sm:[&_dl]:gap-4 **:[&_dl]:gap-2 **:sm:[&_dt]:text-4xl **:[&_dt]:text-2xl **:[&_dt]:font-bold **:[&_dt]:text-neutral-800 **:sm:[dd]:text-xl/8 **:[dd]:text-md **:[dd]:font-medium"></ul> */
}
