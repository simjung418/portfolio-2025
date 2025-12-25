import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <h2>대형 서비스를 운영하며 성장한 <br/>5년 차 프론트엔드 개발자</h2>
      <p className="sm:mt-8 sm:text-xl mt-4 text-lg font-semibold text-md">Vue.js 대형 서비스 운영 경험을 바탕으로 Next.js, TypeScript 기반으로 성공적으로 전환했습니다.</p>
      <p className="mt-5 text-lg">프로세스와 협업을 중시하는 환경에서 성장하고 싶습니다.</p>
      <Link href="/career" className="flex items-center justify-center h-16 mt-10 text-xl font-semibold transition-colors bg-green-300 rounded-md w-50 hover:bg-green-400">5년의 성장 확인하기</Link>
    </>
  );
}
