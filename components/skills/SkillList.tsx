import { SKILLS, SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import { SkillKey, SkillSectionKey } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  section: SkillSectionKey;
  activeSkill: SkillKey;
  onSelect: (skill: SkillKey) => void;
};

export const SkillList = ({ section, activeSkill, onSelect }: Props) => {
  return (
    <ul className="flex gap-4">
      {SKILL_SECTIONS[section].skills.map((skill) => {
        const detail = SKILLS[skill];
        return (
          <li key={skill} className="flex items-center gap-1">
            <button
              type="button"
              className={clsx(
                "w-fit rounded-full text-left font-medium",
                ctaBtnClassMap.base,
                activeSkill === skill
                  ? ctaBtnClassMap.active
                  : ctaBtnClassMap.inactive,
              )}
              onClick={() => onSelect(skill)}
            >
              {/* <div className="relative size-7">
                <Image
                  src={`/skills/${detail.icon}`}
                  alt={detail.name}
                  className="absolute object-contain"
                  fill
                />
              </div> */}
              {detail.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
