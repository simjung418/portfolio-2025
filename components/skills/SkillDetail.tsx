import { SkillData } from "@/lib/types";

type Props = {
  skill: SkillData;
};

export const SkillDetail = ({ skill }: Props) => {
  return (
    <section>
      <h3>{skill.name}</h3>

      <h4>주요 활용 기능</h4>
      <ul>
        {skill.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h4>관련 프로젝트</h4>
      <ul>
        {skill.projects.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong>
            <span>{p.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
