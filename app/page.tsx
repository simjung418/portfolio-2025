import ClientTitleSetter from "@/providers/ClientTitleSetter";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <ClientTitleSetter pageTitle="Home" />
      <h2>구조와 UX를 중심으로 문제를 해결해온</h2>
      <h2>5년 차 프론트엔드 개발자, 심정민 입니다.</h2>
      <p className="mt-4 font-semibold sm:mt-8 sm:text-3xl text-md sm:leading-normal">레거시 환경에서의 실무 경험을 바탕으로 UX와 개발 구조가</p>
      <p className="font-semibold sm:text-3xl text-md sm:leading-normal">어떻게 사용자에게 도움이되는 서비스로 연결되는지를 고민해왔습니다.</p>
      <p className="font-semibold sm:text-3xl text-md sm:leading-normal">팀의 프로세스와 협업을 통해 더 나은 결과물을 만들어가는 환경에서 성장하고 싶습니다.</p>
      <Link href="/career" className="flex items-center justify-center w-50 h-16 mt-10 text-xl font-semibold transition-colors bg-green-300 rounded-md hover:bg-green-400">
        문제를 해결해온 과정 보기
      </Link>
    </>
  );
}
