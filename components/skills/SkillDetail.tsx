import { SkillData } from "@/lib/types";

type Props = {
  skill: SkillData;
};

export const SkillDetail = ({ skill }: Props) => {
  return (
    <>
      <h3 className="font-bold md:mb-6 md:text-4xl">{skill.name}</h3>
      <h4 className="font-bold md:text-2xl">주요 활용 기능</h4>
      <ul className="my-4 flex flex-col gap-3 font-medium md:text-xl">
        {skill.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h4 className="mt-6 font-bold md:text-2xl">관련 프로젝트</h4>
      <ul className="my-4 flex flex-col gap-4">
        {skill.projects.map((p) => (
          <li key={p.name} className="w-1/2 rounded-md border p-4">
            <strong className="mb-4 block text-xl font-bold">{p.name}</strong>
            <span className="font-medium text-neutral-700">{p.summary}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
