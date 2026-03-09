import { SkillList } from "./SkillList";
import { SKILL_SECTION_KEYS, SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import clsx from "clsx";
import { ctaBtnClassMap } from "@/lib/portfolio/classNameMap";

export const SkillSections = () => {
  return (
    <ul className="whitespace-nowrap md:mb-7 md:pb-2 md:grid-cols-2 grid grid-cols-1 gap-12">
      {SKILL_SECTION_KEYS.map((sectionKey) => {
        const section = SKILL_SECTIONS[sectionKey];
        return (
          <li key={sectionKey} className="rounded-2xl backdrop-blur-xs p-8">
            <h3
              className={clsx(
                `mb-8 w-fit min-w-20 justify-center rounded-full px-4 py-2 text-center text-sm font-bold! whitespace-nowrap`,
                ctaBtnClassMap.base,
                ctaBtnClassMap.inactive
              )}
            >
              {section.name}
            </h3>
            <SkillList section={sectionKey}></SkillList>
          </li>
        );
      })}
    </ul>
  );
};
