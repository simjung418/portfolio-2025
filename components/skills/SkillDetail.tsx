import { SkillData, SkillKey } from "@/lib/types";

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
              <li key={p.name} className="w-1/2 rounded-md border p-4">
                <strong className="mb-4 block text-xl font-bold">
                  {p.name}
                </strong>
                <span className="font-medium text-neutral-700">
                  {p.summary}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};
