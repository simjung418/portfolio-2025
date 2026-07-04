import CareSection from "@/components/hero/CareSection";
import { CareCard } from "@/lib/portfolio/hero";
import StatKpiRow from "./StatKpiRow";
import { CTA } from "../button/CTA";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const CARE_CARDS: CareCard[] = [
  {
    title: "왜 필요한가요?에서 출발하는 개발",
    subTitle: "기능이 아니라 목적에서 출발합니다.",
    items: [
      <>구현에 앞서 “왜 필요한가요?”를 묻습니다.</>,
      <>기능보다 목적을 먼저 이해하면 더 나은 해답을 찾을 수 있습니다.</>,
      <>모두가 ‘왜’를 함께 생각할수록 더 좋은 길을 찾을 수 있다고 믿습니다.</>
    ]
  },
  {
    title: "방향이 있는 실행",
    subTitle: "사람, 시간, 기술은 유한합니다. 전략은 선택이 아니라 기본입니다.",
    items: [
      <>
        어떤 결과를 원하는지에서 출발해, 지금 무엇을 해야 하는지까지 이어지는
        <br />
        “퍼즐의 완성본”이 필요합니다.
      </>,
      <>전략 없이 반복되는 실행은 오래가기 어렵다고 생각합니다.</>,
      <>방향성이 전제되면 실패도 데이터가 될 수 있습니다.</>
    ]
  },
  {
    title: "반복을 줄이는 구조",
    subTitle: "전체를 보고 규칙을 구조로, 구조를 효율로 바꿉니다.",
    items: [
      <>전체를 보며 규칙을 찾고, 그 규칙들을 구조화합니다.</>,
      <>코딩은 규칙을 얼마나 명확하고 아름답게 정의하느냐로 유지보수성과 안정성이 보장됩니다.</>,
      <>구조가 정리되면 효율은 자연스럽게 따라온다고 믿습니다.</>
    ]
  }
];

export default function Hero() {
  return (
    <>
      <h2 className="text-neutral-700">운영 중인 업무 시스템을 분석하고</h2>
      <h2 className="mt-2 text-neutral-700">반복 업무를 자동화하는 웹 플랫폼 개발자</h2>
      <p className="my-10 text-base/6.5 font-medium break-keep md:text-3xl md:leading-normal">
        문제를 해결하기 위해 <strong className="text-green-500">실무진의 시선으로 해결방법을 모색</strong>합니다.
      </p>
      <StatKpiRow />

      <hr className="my-13 text-neutral-200" />

      <h2 className="text-green-500 text-center mb-15!">Career</h2>
      <p className="text-lg text-neutral-700"></p>
      <div className="flex items-stretch gap-15 justify-center">
        <ul className="flex flex-col gap-4 text-xl [&_li]:flex [&_li]:items-center [&_li]:gap-2 **:[&_svg]:size-8 **:[&_svg]:text-green-500">
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>운영진 <strong>반복 업무 자동화</strong> 기능 개발</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p><strong>사용자 권한 기반</strong> 화면 및 데이터 접근 제어</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>ISO 27000 <strong>보안 인증</strong> 기능 개발</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>5년간 운영 플랫폼 <strong>운영 및 기능 개선</strong></p>
          </li>
        </ul>
        <CTA href="/career" active={true}>
          커리어 보러가기
        </CTA>
      </div>
      
      <hr className="my-13 text-neutral-200" />

      <h2 className="text-green-500 text-center mb-15!">Projects</h2>
      <p className="text-lg text-neutral-700"></p>
      <div className="flex items-stretch gap-15 justify-center">
        <ul className="flex flex-col justify-center gap-4 text-xl [&_li]:flex [&_li]:items-center [&_li]:gap-2 **:[&_svg]:size-8 **:[&_svg]:text-green-500 h-44">
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>운동 기록 및 성장지표 시각화 앱</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>포트폴리오 구조</p>
          </li>
        </ul>
        <CTA href="https://github.com/simjung418" active={false} target="_blank">
          깃허브 바로가기
        </CTA>
      </div>

      <hr className="my-13 text-neutral-200" />

      <h2 className="text-green-500 text-center mb-15!">SKILLS</h2>
      <p className="text-lg text-neutral-700"></p>
      <div className="flex items-stretch gap-15 justify-center">
        <ul className="flex flex-col justify-center gap-4 text-xl [&_li]:flex [&_li]:items-center [&_li]:gap-2 **:[&_svg]:size-8 **:[&_svg]:text-green-500 h-44">
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>PHP, MySQL, Javascript, Vue.js 실무 경력</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>React, Typescript, Next.js 개인 프로젝트 경험</p>
          </li>
          <li>
            <span>
              <ArrowRightIcon />
            </span>
            <p>JAVA, Spring Boot 개인 프로젝트 경험</p>
          </li>
        </ul>
        <CTA href="/skills" active={true}>
          스킬 보러가기
        </CTA>
      </div>

      <hr className="my-13 text-neutral-200" />

      <div className="mt-10 flex flex-col items-baseline gap-1 md:flex-row md:gap-4">
        <h3 className="text-xl font-bold break-keep text-neutral-500 md:text-4xl md:leading-normal">
          What I Care About
        </h3>
        <p className="text-base/7 font-bold text-neutral-400 md:text-2xl">기능이 아니라 방향을 설계합니다.</p>
      </div>
      <ul className="mt-4 flex flex-col gap-3 md:mt-8 **:[&_strong]:text-green-500">
        {CARE_CARDS.map((care, index) => (
          <li key={`care-${index}`}>
            <CareSection title={care.title} subTitle={care.subTitle} items={care.items} />
          </li>
        ))}
      </ul>
    </>
  );
}
