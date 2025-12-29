'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/providers/TitleContext';

export default function ClientTitleSetter({ pageTitle }: { pageTitle: string }) {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  return null;
}