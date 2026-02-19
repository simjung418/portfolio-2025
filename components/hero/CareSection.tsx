import { MinusIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

type Prop = {
  title: string;
  subTitle: string;
  items: ReactNode[];
};

export default function CareSection({ title, subTitle, items }: Prop) {
  return (
    <dl>
      <dt className="my-2 flex items-start justify-start gap-2 md:my-4">
        <ChevronRightIcon className="mt-1 size-5 shrink-0 text-neutral-400 md:size-6" />
        <div>
          <p className="text-lg/7 font-bold text-neutral-700 md:text-2xl">
            {title}
          </p>
          <p className="text-base/7 mt-1 font-semibold text-green-500 md:text-xl">
            {subTitle}
          </p>
        </div>
      </dt>
      {items.map((item) => (
        <dd className="flex items-center justify-start gap-2 pl-3 text-base font-semibold md:pl-4 md:text-xl/10">
          <MinusIcon className="size-2 text-neutral-500" />
          <p>{item}</p>
        </dd>
      ))}
    </dl>
  );
}
