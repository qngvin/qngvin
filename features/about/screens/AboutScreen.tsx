'use client';

import { useTranslations } from 'next-intl';
import PageTransition from '@/shared/components/PageTransition';

export const AboutScreen = () => {
  const t = useTranslations('about');

  return (
    <PageTransition className="h-full w-full sm:w-2/3 xl:w-1/3 flex flex-col justify-end tracking-tight font-montserrat">
      <p className="text-black dark:text-white font-semibold text-base mb-4">{t('title')}</p>
      <p className="text-black dark:text-white font-normal text-base mb-5">
        {t('education')}
        <span className="italic">{t('university')}</span>
      </p>
      <p className="text-black dark:text-white font-normal text-base mb-5">{t('description')}</p>
      <p className="text-black dark:text-white font-normal text-base">{t('currentStack')}</p>
      <p className="text-black dark:text-white font-normal text-base">{t('stack.frontend')}</p>
      <p className="text-black dark:text-white font-normal text-base">{t('stack.backend')}</p>
      <p className="text-black dark:text-white font-normal text-base mb-8">{t('stack.database')}</p>
      <p className="text-gray-400 italic font-normal text-base">{t('lastUpdated')}</p>
    </PageTransition>
  );
};
