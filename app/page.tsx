import SectionTitle from "@/components/sectionTitle";
import { getSafePageTitle } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const title = getSafePageTitle(metadata);

export default function Home() {
  return (
    <>
      <SectionTitle title={title} />
      <h3>"안녕하세요, 5년차 프론트엔드 개발자 심정민 입니다."</h3>
      <p>나무가 아닌 숲을 보는 개발자 입니다. 울창한 프로덕트를 가꿔봅시다!</p>
    </>
  );
}
