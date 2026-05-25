'use client';

import { useTranslations } from 'next-intl';

export interface UseHomeReturn {
  t: ReturnType<typeof useTranslations<'home'>>;
}

export const useHome = (): UseHomeReturn => {
  const t = useTranslations('home');
  return { t };
};
