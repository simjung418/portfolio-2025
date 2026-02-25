"use client";

import { CAREER_LIST } from "@/lib/types";
import { CareerList, CareerCardDetail } from "@/components/career/";
import { useCareer } from "./useCareer";
import { CAREER_CARDS } from "./career.content";

export default function CareerPage() {
  const { selected, onSelect, trigger } = useCareer();
  return (
    <>
      <section className="relative">
        <CareerList
          list={CAREER_LIST}
          onSelect={onSelect}
          cards={CAREER_CARDS}
          selected={selected}
        />
        {CAREER_LIST.map((name) => (
          <div
            key={name}
            ref={(el) => {
              trigger.current[name] = el;
            }}
            className="scroll-mt-24"
          >
            <CareerCardDetail card={CAREER_CARDS[name]} name={name} />
            <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>
          </div>
        ))}
      </section>
    </>
  );
}
