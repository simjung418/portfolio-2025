import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import CareSection from "@/components/hero/CareSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const style = ctaBtnClassMap;
  return (
    <>
      <h2 className="text-green-500">숲을 보는 개발자,</h2>
      <h2>프론트 엔지니어 심정민입니다.</h2>
      <p className="mt-4 text-base/6.5 font-semibold break-keep md:mt-8 md:text-3xl md:leading-normal">
        기획과 디자인, 프론트엔드와 백엔드, 그리고 사용자까지 각자의 언어를
        이해하고
      </p>
      <p className="text-base/6.5 font-semibold break-keep md:text-3xl md:leading-normal">
        <strong className="font-black text-green-600">
          서로 다른 니즈를 하나의 흐름으로 엮어
        </strong>{" "}
        잘 연결된 프로젝트를 울창한 숲처럼 만들어갑니다.
      </p>
      <Link
        href="/career"
        className={clsx(
          "my-10 w-fit justify-center rounded-md py-3 text-center md:px-6 md:py-5 md:text-xl",
          style.base,
          style.active,
        )}
      >
        커리어 바로가기
      </Link>

      <hr className="my-13 text-neutral-200" />

      <div className="mt-10 flex flex-col items-baseline gap-1 md:flex-row md:gap-4">
        <h3 className="text-xl font-bold break-keep text-neutral-500 md:text-4xl md:leading-normal">
          What I Care About
        </h3>
        <p className="text-base/7 font-bold text-neutral-400 md:text-2xl">
          기능이 아니라 방향을 설계합니다.
        </p>
      </div>
      <ul className="mt-4 flex flex-col gap-3 md:mt-8 **:[&_strong]:text-green-600">
        <li>
          <CareSection
            title="왜 필요한가요?에서 출발하는 개발"
            subTitle="기능이 아니라 목적에서 출발합니다."
            items={[
              <>구현에 앞서 먼저 “왜 필요한가요?”를 묻습니다.</>,
              <>
                목적을 이해하면 요구된 기능보다 더 나은 해답이 보일 때가
                많습니다.
              </>,
              <>‘왜’를 공유할수록 더 나은 답을 함께 찾을 수 있다고 믿습니다.</>,
            ]}
          />
        </li>
        <li>
          <CareSection
            title="방향이 있는 실행"
            subTitle="사람, 시간, 기술은 유한합니다. 그래서 전략은 선택이 아니라 기본입니다."
            items={[
              <>
                어떤 결과를 원하는지에서 출발해, 지금 무엇을 해야 하는지까지
                이어지는 “퍼즐의 완성본”이 필요합니다.
              </>,
              <>전략 없이 반복되는 실행은 오래가기 어렵다고 생각합니다.</>,
              <>방향성이 전제되면 실패도 데이터가 될 수 있습니다.</>,
            ]}
          />
        </li>
        <li>
          <CareSection
            title="반복을 줄이는 구조"
            subTitle="전체를 보고 규칙을 구조로, 구조를 효율로 바꿉니다."
            items={[
              <>전체를 보며 규칙을 찾고, 그 규칙들을 구조화합니다.</>,
              <>
                코딩은 규칙을 얼마나 명확하고 아름답게 정의하느냐의 문제라고
                생각합니다.
              </>,
              <>구조가 정리되면 효율은 자연스럽게 따라온다고 믿습니다.</>,
            ]}
          />
        </li>
      </ul>
    </>
  );
}
