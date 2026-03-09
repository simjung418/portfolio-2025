"use client";

import { SKILL_SECTIONS } from "@/app/(portfolio)/skills/skill.content";
import { SkillKey, SkillSectionKey, SkillData } from "@/lib/portfolio/skills";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

type Props = {
  section: SkillSectionKey;
};
export const SKILLS: Record<SkillKey, SkillData> = {
  react: {
    name: "React",
    icon: "react.svg",
    percent: 100
  },
  nextjs: {
    name: "Next.js",
    icon: "nextjs.png",
    percent: 100
  },
  typescript: {
    name: "TypeScript",
    icon: "ts.png",
    percent: 100
  },

  tailwind: {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
    percent: 100
  },
  vue: {
    name: "Vue.js",
    icon: "vue.png",
    percent: 100
  },
  php: {
    name: "PHP",
    icon: "php.png",
    percent: 100
  },
  mysql: {
    name: "MySQL",
    icon: "mysql.png",
    percent: 100
  },
  prisma: {
    name: "Prisma",
    icon: "prisma.png",
    percent: 50
  },
  python: {
    name: "Python",
    icon: "python.png",
    percent: 70
  },
  swiftui: {
    name: "SwiftUI",
    icon: "swift.svg",
    percent: 10
  },
  rn: {
    name: "React Native",
    icon: "rn.svg",
    percent: 0
  },
  figma: {
    name: "Figma",
    icon: "figma.png",
    percent: 100
  },
  chatgpt: {
    name: "Chat GPT",
    icon: "gpt.svg",
    percent: 100
  },
  notion: {
    name: "Notion",
    icon: "notion.svg",
    percent: 100
  },
  git: {
    name: "GitHub",
    icon: "github.svg",
    percent: 100
  },
  cursor: {
    name: "Cursor.ai",
    icon: "cursor.png",
    percent: 100
  },
  apple: {
    name: "Apple Devices",
    icon: "apple.png",
    percent: 100
  },
  websocket: {
    name: "WebSocket",
    icon: "websocket.png",
    percent: 100
  },
  fastapi: {
    name: "Fast API",
    icon: "fastapi.png",
    percent: 80
  },
  axios: {
    name: "Axios",
    icon: "axios.svg",
    percent: 100
  }
};

export const SkillList = ({ section }: Props) => {
  const waveRefs = useRef<Record<string, SVGPathElement | null>>({});
  const waveSecondaryRefs = useRef<Record<string, SVGPathElement | null>>({});

  const getWaveY = (percent: number) => {
    const clampedPercent = Math.max(0, Math.min(92, percent));
    return 56 - clampedPercent * 0.56;
  };

  const getWavePath = (y: number, phase = 0) => {
    const normalizedPhase = phase % (Math.PI * 2);

    const p1 = y + Math.sin(normalizedPhase) * 3;
    const p2 = y + Math.sin(normalizedPhase + Math.PI / 2) * 4;
    const p3 = y + Math.sin(normalizedPhase + Math.PI) * 3;
    const p4 = y + Math.sin(normalizedPhase + (Math.PI * 3) / 2) * 4;
    const p5 = y + Math.sin(normalizedPhase + Math.PI * 2) * 3;

    return `M0 ${p1} C10 ${p1}, 18 ${p2}, 28 ${p2} C38 ${p2}, 46 ${p3}, 56 ${p3} C66 ${p3}, 74 ${p4}, 84 ${p5} V56 H0 Z`;
  };

  useEffect(() => {
    const animations = SKILL_SECTIONS[section].skills.flatMap((skillKey) => {
      const primaryNode = waveRefs.current[skillKey];
      const secondaryNode = waveSecondaryRefs.current[skillKey];
      const skill = SKILLS[skillKey as SkillKey];
      const waveY = getWaveY(skill.percent);

      const primaryState = { phase: 0 };
      const secondaryState = { phase: Math.PI / 2 };

      if (primaryNode) {
        primaryNode.setAttribute("d", getWavePath(waveY, primaryState.phase));
      }

      if (secondaryNode) {
        secondaryNode.setAttribute("d", getWavePath(waveY + 2, secondaryState.phase));
      }

      const result = [];

      if (primaryNode) {
        result.push(
          animate(primaryState, {
            phase: `+=${Math.PI * 2}`,
            duration: 2200,
            ease: "linear",
            loop: true,
            onUpdate: () => {
              primaryNode.setAttribute("d", getWavePath(waveY, primaryState.phase));
            }
          })
        );
      }

      if (secondaryNode) {
        result.push(
          animate(secondaryState, {
            phase: `+=${Math.PI * 2}`,
            duration: 2200,
            ease: "linear",
            loop: true,
            onUpdate: () => {
              secondaryNode.setAttribute("d", getWavePath(waveY + 2, secondaryState.phase));
            }
          })
        );
      }

      return result;
    });

    return () => {
      animations.forEach((animation) => animation?.pause());
    };
  }, [section]);

  return (
    <ul className="grid grid-cols-4 gap-4">
      {SKILL_SECTIONS[section].skills.map((skill) => {
        const detail = SKILLS[skill];
        return (
          <li key={skill} className="group flex flex-col items-center">
            <figure className="w-fit rounded-full bg-white p-3 shadow-xs transition-all group-hover:scale-110">
              <div className="relative box-border flex size-8 items-center justify-center">
                <Image src={`/skills/${detail.icon}`} alt="skill" fill className="object-contain" />
                <div className="absolute flex size-14 items-center justify-center overflow-hidden rounded-full bg-white/60 text-center font-semibold text-white opacity-0 transition-all group-hover:opacity-100">
                  <svg
                    viewBox="0 0 84 56"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-[150%]"
                    aria-hidden="true"
                  >
                    <path d={`M0 56 H84 V56 H0 Z`} fill="rgb(74 222 128 / 0.45)" />
                    <path
                      ref={(node) => {
                        waveSecondaryRefs.current[skill] = node;
                      }}
                      d={getWavePath(getWaveY(detail.percent) + 2, Math.PI / 2)}
                      fill="rgb(74 222 128 / 0.45)"
                    />
                    <path
                      ref={(node) => {
                        waveRefs.current[skill] = node;
                      }}
                      d={getWavePath(getWaveY(detail.percent))}
                      fill="rgb(74 222 128 / 0.38)"
                    />
                  </svg>
                  <p className="relative z-10">{detail.percent.toLocaleString()}%</p>
                </div>
              </div>
            </figure>
            <figcaption className="mt-2 w-full text-center text-sm whitespace-normal text-neutral-500 md:text-base">
              {detail.name}
            </figcaption>
          </li>
        );
      })}
    </ul>
  );
};
