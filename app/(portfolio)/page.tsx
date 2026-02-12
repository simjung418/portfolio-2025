import { ctaBtnClassMap } from "@/components/button/ctaBtnClassMap";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const style = ctaBtnClassMap;
  return (
    <>
      <h2 className="text-green-500">
        구조와 UX를 중심으로 <br className="block md:hidden" />
        문제를 해결하는
      </h2>
      <h2>
        5년 차 프론트엔드 개발자, <br className="block md:hidden" />
        심정민입니다.
      </h2>
      <p className="mt-4 text-base/6.5 font-semibold break-keep md:mt-8 md:text-3xl md:leading-normal">
        레거시 환경 실무 경험을 바탕으로 UX와 개발 구조가
      </p>
      <p className="text-base/6.5 font-semibold break-keep md:text-3xl md:leading-normal">
        사용자에게 실제로{" "}
        <strong className="font-black">도움이 되는 서비스로 이어지도록</strong>{" "}
        고민하는 코딩을 합니다.
      </p>
      <p className="text-base/6.5 font-semibold break-keep md:text-3xl md:leading-normal">
        팀의 프로세스와 협업을 통해 더 나은 결과물을 만들어가는 환경에서
        성장하고 싶습니다.
      </p>
      <Link
        href="/career"
        className={clsx(
          "mt-10 justify-center rounded-md py-3 text-center font-bold md:inline-flex! md:px-6 md:py-5 md:text-xl",
          style.base,
          style.active,
        )}
      >
        커리어 바로가기
      </Link>
    </>
  );
}
