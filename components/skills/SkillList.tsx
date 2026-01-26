import { SKILLS, SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import { SkillKey, SkillSectionKey } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  section: SkillSectionKey;
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

const skillClassMap = {
  base: "box-border flex w-full items-center gap-3 rounded-md border px-4 py-2 text-left text-lg font-medium transition-colors",
  active:
    "border-transparent bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300",
  inactive:
    "border-transparent hover:border-neutral-200 hover:bg-neutral-100 active:border-neutral-300 active:bg-neutral-200",
};

export const SkillList = ({ section, activeSkill, onSelect }: Props) => {
  return (
    <ul>
      {SKILL_SECTIONS[section].skills.map((skill) => {
        const detail = SKILLS[skill];
        return (
          <li key={skill}>
            <button
              type="button"
              className={clsx(
                skillClassMap.base,
                activeSkill === skill
                  ? skillClassMap.active
                  : skillClassMap.inactive,
              )}
              onClick={() => onSelect(skill)}
            >
              <div className="relative size-7">
                <Image
                  src={`/skills/${detail.icon}`}
                  alt={detail.name}
                  className="absolute object-contain"
                  fill
                />
              </div>
              {detail.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
