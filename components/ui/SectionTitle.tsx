"use client";

import { usePageTitle } from "@/providers/TitleContext";

export const SectionTitle = () => {
  const { title } = usePageTitle();
  const titleArray: string[] = title.split("");

  return (
    <h1 className={`text-3xl text-neutral-300 scale-x-200 origin-left sm:text-7xl`}>
      {titleArray.map((value, index) => {
        return <span key={`title-${index}`}>{value}</span>;
      })}
    </h1> //PARKING 제목 텍스트 바뀔때 애니메이션 펑션 추가
  );
};
