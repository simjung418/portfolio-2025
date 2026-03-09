import CareSection from "@/components/hero/CareSection";
import { CareCard } from "@/lib/portfolio/hero";
import StatKpiRow from "./StatKpiRow";
import { CTA } from "../button/CTA";

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
    subTitle: "사람, 시간, 기술은 유한합니다. 그래서 전략은 선택이 아니라 기본입니다.",
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
      <h2 className="text-green-500">숲을 보는 개발자,</h2>
      <h2>프론트 엔지니어 심정민입니다.</h2>
      <StatKpiRow />
      <p className="mt-4 text-base/6.5 font-medium break-keep md:text-3xl md:leading-normal">
        기획, 디자인, 개발자, 그리고 사용자까지
      </p>
      <p className="text-base/6.5 font-medium break-keep md:text-3xl md:leading-normal">
        <strong className="font-bold text-green-600">서로 다른 언어를 하나의 흐름으로 연결하여</strong> 프로젝트를
        울창한 숲처럼 만들어갑니다.
      </p>
      <div className="md:gap-4 flex gap-3 my-10">
        <CTA href="/career" active={true}>
          커리어 보러가기
        </CTA>
        <CTA href="https://github.com/simjung418/portfolio-2025.git" active={false} target="_blank">
          깃허브 바로가기
        </CTA>
      </div>

      <hr className="my-13 text-neutral-200" />

      <div className="md:flex-row md:gap-4 flex flex-col items-baseline gap-1 mt-10">
        <h3 className="break-keep text-neutral-500 md:text-4xl md:leading-normal text-xl font-bold">
          What I Care About
        </h3>
        <p className="text-base/7 text-neutral-400 md:text-2xl font-bold">기능이 아니라 방향을 설계합니다.</p>
      </div>
      <ul className="mt-4 flex flex-col gap-3 md:mt-8 **:[&_strong]:text-green-600">
        {CARE_CARDS.map((care, index) => (
          <li key={`care-${index}`}>
            <CareSection title={care.title} subTitle={care.subTitle} items={care.items} />
          </li>
        ))}
      </ul>
    </>
  );
}
