import { SKILL_KEYS, SkillKey } from "@/lib/types";
import { useEffect, useRef, useState } from "react";


export function useSkill() {
  const [activeSkill, setActiveSkill] = useState<SkillKey>("nextjs");
  const onSelect = (skill: SkillKey) => {
    setActiveSkill(skill);
  };

  const trigger = useRef<Record<SkillKey, HTMLHeadElement | null>>({
    nextjs: null,
    typescript: null,
    tailwind: null,
    prisma: null,
    vue: null,
    php: null,
    mysql: null,
    python: null,
    appdevelop: null,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = SKILL_KEYS.find(
            (name) => trigger.current[name] === entry.target,
          );
          if (key) {
            setActiveSkill(key);
          }
        }
      });
    }, options);

    SKILL_KEYS.forEach((name) => {
      if (trigger.current[name]) {
        observer.observe(trigger.current[name]!);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    activeSkill, onSelect, trigger
  }
}