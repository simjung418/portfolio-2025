import ClientTitleSetter from "@/providers/ClientTitleSetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aboutme"
}

export default function AboutPage() {
  return (
    <>
      <ClientTitleSetter pageTitle="About me" />
      <ul className="mt-8 flex flex-col sm:gap-7 gap-4 **:[&_dl]:flex **:[&_dl]:flex-col **:sm:[&_dl]:gap-4 **:[&_dl]:gap-2 **:sm:[&_dt]:text-4xl **:[&_dt]:text-2xl **:[&_dt]:font-bold **:[&_dt]:text-neutral-800 **:sm:[dd]:text-xl/8 **:[dd]:text-md **:[dd]:font-medium">
        <li>
          <dl>
            <dt>구조와 UX를 중심으로 문제를 바라보기까지</dt>
            <dd>
              <p>레거시 환경에서의 실무 경험을 바탕으로,</p>
              <p>개발 구조와 UX가 어떻게 사용자 경험에 직접적인 영향을 미치는지 고민하며 코딩했습니다.</p>
              <p>jQuery 기반 레거시 시스템을 Vue.js 기반으로 전환하며 프레임워크의 감각을 손에 익히고</p>
              <p>최근에는 Next.js/Typescript 생태계로 이전하며</p>
              <p>단순히 </p>
              <p>새로운 기술을 빠르게 습득하고 실무에 적용하여 제품 품질을 향상시킵니다.</p>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>"도움이 되는 서비스"가 되기 위해 해결사가 되기</dt>
            <dd>
              <p>PHP/MySQL 기반 핵심 플랫폼의 백엔드 개발을 주도하며</p>
              <p>외주 코드를 100% 내재화한 경험이 있습니다.</p>
              <p>백엔드 아키텍처와 API 설계에 대한 깊은 이해를 바탕으로</p>
              <p>프론트엔드-백엔드가 함께 효율적으로 프로젝트를 진행할 수 있는 의사소통 능력을 보유합니다.</p>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>협업과 프로세스가 프로젝트에 주는 영향</dt>
            <dd>
              <p>요구사항 구현을 넘어 제품 기획 및 디자인 리뷰 단계부터 주도적으로 참여하여</p>
              <p>기술/UX 관점의 논의를 이끌었습니다.</p>
              <p>동료들과 함께 최적의 아키텍처를 설계하고 복잡한 문제를 해결하는 과정에서 보람을 느낍니다.</p>
            </dd>
          </dl>
        </li>
      </ul>
    </>
  );
}
