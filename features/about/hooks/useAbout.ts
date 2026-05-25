'use client';

import { useTranslations } from 'next-intl';

export interface UseAboutReturn {
  t: ReturnType<typeof useTranslations<'about'>>;
}

export const useAbout = (): UseAboutReturn => {
  const t = useTranslations('about');
  return { t };
};
