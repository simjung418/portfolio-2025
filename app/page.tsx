import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <h2 className="text-green-500">구조와 UX를 중심으로 문제를 해결하는</h2>
      <h2>5년 차 프론트엔드 개발자, 심정민 입니다.</h2>
      <p className="mt-4 font-semibold sm:mt-8 sm:text-3xl text-md sm:leading-normal">레거시 환경 실무 경험을 바탕으로 UX와 개발 구조가</p>
      <p className="font-semibold sm:text-3xl text-md sm:leading-normal">사용자에게 실제로 <strong className="font-black">도움이 되는 서비스로 이어지도록</strong> 고민하는 코딩을 합니다.</p>
      <p className="font-semibold sm:text-3xl text-md sm:leading-normal">팀의 프로세스와 협업을 통해 더 나은 결과물을 만들어가는 환경에서 성장하고 싶습니다.</p>
      <Link href="/career" className="inline-flex items-center justify-center px-6 py-5 mt-10 text-xl font-bold transition-colors bg-green-300 rounded-md hover:bg-green-400">
        문제해결 과정 보기
      </Link>
    </>
  );
}
