import { CareCard } from "@/lib/types";
import { MinusIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function CareSection({ title, subTitle, items }: CareCard) {
  return (
    <dl>
      <dt className="my-2 flex items-start justify-start gap-2 md:my-4">
        <ChevronRightIcon className="mt-1.5 md:mt-1 size-4 shrink-0 text-neutral-400 md:size-6" />
        <div>
          <p className="text-lg/7 font-bold text-neutral-700 md:text-2xl">
            {title}
          </p>
          <p className="text-base/7 mt-1 font-semibold text-green-600 md:text-xl">
            {subTitle}
          </p>
        </div>
      </dt>
      {items.map((item, index) => (
        <dd key={`${title}-${index}`} className="flex items-baseline justify-start gap-2 pl-1.5 text-base/6.5 md:pl-4 md:text-xl/10">
          <MinusIcon className="size-2 text-neutral-500" />
          <p>{item}</p>
        </dd>
      ))}
    </dl>
  );
}
