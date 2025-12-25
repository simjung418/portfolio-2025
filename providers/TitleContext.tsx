// providers/TitleContext.tsx (클라이언트 컴포넌트여야 함)
"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// 1. Context 타입 정의
interface TitleContextType {
  title: string;
  setTitle: (newTitle: string) => void;
}

// 2. Context 생성 및 초기값 설정
const TitleContext = createContext<TitleContextType | undefined>(undefined);

// 3. Provider 컴포넌트: 상태를 관리하고 하위 컴포넌트에 제공
export function TitleProvider({ children }: { children: ReactNode }) {
  // 기본값은 metadata의 default title과 일치시키는 것이 좋습니다.
  const [title, setTitleState] = useState("SJM Portfolio");

  // 제목 업데이트 함수 (불필요한 리렌더링 방지)
  const setTitle = useCallback((newTitle: string) => {
    setTitleState(newTitle);
  }, []);

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
}

// 4. Custom Hook: 컴포넌트에서 Context를 쉽게 사용하도록 제공
export function usePageTitle() {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error("usePageTitle must be used within a TitleProvider");
  }
  return context;
}
