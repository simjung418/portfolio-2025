import { SkillSections } from "@/components/skills/SkillSections";

export default function SkillsPage() {
  return (
    <>
      <div className="mt-4 mb-10">
        <p className="text-base/6.5 font-medium break-keep text-neutral-600 md:mt-8 md:text-2xl md:leading-normal">
          사용 가능한 기술을 테마별로 정리하고,<br />
          각 스택을 활용해 어떤 문제를 해결했는지와<br />
          실 사용시 주로 다루는 기능을 함께 구성했습니다.
        </p>
      </div>
      <section className="relative">
        <SkillSections/>
      </section>
    </>
  );
}
