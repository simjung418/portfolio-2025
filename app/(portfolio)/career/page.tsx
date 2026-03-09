"use client";

import { CAREER_LIST } from "@/lib/portfolio/career";
import { CareerList, CareerCardDetail } from "@/components/career/";
import { useCareer } from "./useCareer";
import { CAREER_CARDS } from "./career.content";
import { badgeClass } from "@/lib/portfolio/classNameMap";
import { CTA } from "@/components/button/CTA";

export default function CareerPage() {
  const { selected, onSelect, trigger } = useCareer();
  return (
    <>
      <h3 className="text-3xl font-bold text-neutral-700">LEXCODE Inc.</h3>
      <ul className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 md:gap-x-4">
        <li className="flex items-center gap-2">
          <span className={badgeClass}>직급</span>
          <p className="text-lg font-semibold">대리</p>
        </li>
        <li className="flex items-center gap-2">
          <span className={badgeClass}>소속 부서</span>
          <p className="text-lg font-semibold">연구개발부</p>
        </li>
        <li className="flex items-center gap-2">
          <span className={badgeClass}>재직기간</span>
          <p className="text-lg font-semibold">2020.07 ~ 2025.08 (5년 2개월)</p>
        </li>
      </ul>
      <p className="mt-4 mb-10 text-base/6.5 font-medium break-keep text-neutral-600 md:text-xl md:leading-normal">
        재직 기간 동안 수행한 업무를 주요 프로젝트 중심으로 정리했습니다.
        <br />각 항목은 문제 정의부터 해결 과정, 그리고 결과까지의 흐름으로 구성했습니다.
      </p>
      <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>
      <section className="relative">
        <CareerList list={CAREER_LIST} onSelect={onSelect} cards={CAREER_CARDS} selected={selected} />
        {CAREER_LIST.map((name, index) => (
          <div key={name} className="scroll-mt-24">
            {index !== 0 && <div className="my-4 h-px w-full bg-neutral-300 md:my-8"></div>}
            <CareerCardDetail
              triggerRef={(el) => {
                trigger.current[name] = el;
              }}
              card={CAREER_CARDS[name]}
              name={name}
            />
          </div>
        ))}
      </section>
      <div className="my-30 flex flex-col items-center justify-center gap-5 md:flex-row">
        <p className="text-xl font-medium">인상깊게 확인하셨다면,</p>
        <CTA href="/projects" active={true}>
          Next.js로 만든 프로젝트 보러가기
        </CTA>
      </div>
    </>
  );
}
