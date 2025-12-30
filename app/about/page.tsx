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
              <p>php, vue2, jQuery 혼재된 레거시 환경을 관리하며</p>
              <p>작은 UIUX 변경에도 데이터 책임이 모호한 구조로 인해 마크업부터 다시 진행해야 했습니다.</p>
              <p>이를 보완하기 위해 초기 수정단계에서 컴포넌트의 책임과 역할을 부여하는것을 우선으로 생각하며 플랫폼을 관리했습니다.</p>
              <p>하지만 혼자서 이해하고 있는 방대한 양의 유지보수를 위한 정보를 인수인계가 가능할지에 대한 불안을 항상 가지고 있었습니다.</p>
              <p>이 경험이 저에게 <strong>요구사항을 빠르고 안정적으로 해결하려면 탄탄한 구조가 필수적</strong>이라는것을 알려주었습니다.</p>
              <p>그리고 모두가 이해할 수 있는 탄탄한 구조, 변경에 강한 UX라는 결과를 타입스크립트를 통해 구현하는것이</p>
              <p>가장 이상적이라고 판단하여 React / Next.js / Typescript 기반의 개발방식으로 전환하게 되었습니다.</p>
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
