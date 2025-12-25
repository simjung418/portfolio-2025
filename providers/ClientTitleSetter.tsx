'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/providers/TitleContext';

export default function ClientTitleSetter({ pageTitle }: { pageTitle: string }) {
  const { setTitle } = usePageTitle();

  // 컴포넌트가 마운트될 때 제목을 설정합니다.
  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  return null; // 이 컴포넌트는 UI를 렌더링할 필요가 없습니다.
}