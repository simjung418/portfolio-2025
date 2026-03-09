import { SkillData, SkillKey } from "@/lib/portfolio/skills";
import clsx from "clsx";
import { ctaBtnClassMap } from "@/lib/portfolio/classNameMap";
import Link from "next/link";

type Props = {
  card: SkillData;
  name: SkillKey;
};

export const SkillDetail = ({ card, name }: Props) => {
  return (
    <>
      <h3 className="md:mb-6 md:text-4xl font-bold">{card.name}</h3>
      <h4 className="md:text-2xl pl-2 font-bold">주요 활용 기능</h4>
      <ul className="md:text-xl flex flex-col gap-3 pl-5 my-4 font-medium">
        {card.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {card.projects ? (
        <>
          <h4 className="md:text-2xl pl-2 mt-6 font-bold">관련 프로젝트 / 커리어</h4>
          <ul className="flex flex-col gap-4 pl-5 my-4">
            {card.projects.map((p) => (
              <li key={p.name}>
                <Link
                  href="/projects"
                  className={clsx(
                    "w-full min-w-20 flex-1 justify-center rounded-md py-3 md:w-fit md:flex-none md:px-6 md:py-5 md:text-xl",
                    ctaBtnClassMap.base,
                    ctaBtnClassMap.active
                  )}
                >
                  <div>
                    <strong className="block mb-4 text-xl font-bold">{p.name}</strong>
                    <span className="text-neutral-700 font-medium">{p.summary}</span>
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
