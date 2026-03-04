import { SkillData, SkillKey } from "@/lib/types";
import clsx from "clsx";
import { ctaBtnClassMap } from "../button/ctaBtnClassMap";
import Link from "next/link";

type Props = {
  card: SkillData;
  name: SkillKey;
};

export const SkillDetail = ({ card, name }: Props) => {
  return (
    <>
      <h3 className="font-bold md:mb-6 md:text-4xl">{card.name}</h3>
      <h4 className="pl-2 font-bold md:text-2xl">주요 활용 기능</h4>
      <ul className="my-4 flex flex-col gap-3 pl-5 font-medium md:text-xl">
        {card.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {card.projects ? (
        <>
          <h4 className="mt-6 pl-2 font-bold md:text-2xl">
            관련 프로젝트 / 커리어
          </h4>
          <ul className="my-4 flex flex-col gap-4 pl-5">
            {card.projects.map((p) => (
              <li key={p.name}>
                <Link
                  href="/projects"
                  className={clsx(
                    "w-full min-w-20 flex-1 justify-center rounded-md py-3 md:w-fit md:flex-none md:px-6 md:py-5 md:text-xl",
                    ctaBtnClassMap.base,
                    ctaBtnClassMap.active,
                  )}
                >
                  <div>
                    <strong className="mb-4 block text-xl font-bold">
                      {p.name}
                    </strong>
                    <span className="font-medium text-neutral-700">
                      {p.summary}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};
