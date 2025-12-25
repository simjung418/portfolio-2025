"use client";

import { CardDetail, CardList } from "@/components/cards";
import { Cards, CareerListKeys } from "@/lib/types";
import { useState } from "react";

const Career: Record<CareerListKeys, Cards> = {
  bisat2: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  iso: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  deepread2: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  lexcloud: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  metafield: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  bavl: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  platform: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
  l10n: {
    title: "",
    desc: (),
    tech: [],
    detail: ()
  },
}

export default function CareerPage() {
  const [selected, setSelected] = useState(Career["bisat2"])
  const onSelect = (name) => { setSelected(name)}
  return (
    <>
      <CardList onSelect={onSelect} cards={Career} />
      <CardDetail selected={selected} />
      <div>
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* 프로젝트 카드 */}
            <div className="space-y-8">
              {/* 1. ISO 보안 인증 */}
              <article className="bg-white rounded-lg shadow-lg p-8">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2>ISO 보안 인증 주도</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">2025.02 - 2025.06</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">글로벌 인증</span>
                    </div>
                  </div>
                </div>

                {/* 기술 스택 */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    <strong>Vue.js, PHP, MySQL</strong>
                  </p>
                </div>

                {/* CAR */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">입찰 경쟁력 강화를 위해 ISO 27000 시리즈 글로벌 보안 인증 획득이 필수적이었습니다.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Action</h3>
                    <p className="text-gray-600 leading-relaxed">
                      보안 취약점 진단부터 개발 항목 취합, 경영진 논의, 개발, QA, 인증 심사까지 전 과정을 주도했습니다. IP 통제, 2FA 인증, 민감정보 접근 통제 등 핵심 보안 요건을 구현했습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Result</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-blue-600">ISO 27000/27001/27017</strong> 인증 획득으로 입찰 수주율 <strong className="text-blue-600">10% 향상</strong>및 데이터 보안 신뢰도를
                      극대화했습니다.
                    </p>
                  </div>
                </div>
              </article>

              {/* 다른 프로젝트들... */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
