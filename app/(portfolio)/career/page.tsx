"use client";

import { CAREER_LIST } from "@/lib/portfolio/career";
import { CareerList, CareerCardDetail } from "@/components/career/";
import { useCareer } from "./useCareer";
import { CAREER_CARDS } from "./career.content";

export default function CareerPage() {
  const { selected, onSelect, trigger } = useCareer();
  return (
    <>
      <h2 className="text-neutral-700">LEXCODE Inc.</h2>
      <p className="mt-4 mb-10 text-base/6.5 font-medium break-keep text-neutral-600 md:mt-8 md:text-2xl md:leading-normal">
        재직 기간 동안 수행한 업무를 주요 프로젝트 중심으로 정리했습니다.
        <br />각 항목은 문제 정의부터 해결 과정, 그리고 결과까지의 흐름으로
        구성했습니다.
      </p>
      <ul>
        <li>
          <span>직급</span>
          <p>대리</p>
        </li>
        <li>
          <span>소속 부서</span>
          <p>연구개발부</p>
        </li>
        <li>
          <span>재직 기간</span>
          <p>2020.07 ~ 2025.08</p>
        </li>
      </ul>

      <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>

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
