'use client';

import { useTranslations } from 'next-intl';
import PageTransition from '@/shared/components/PageTransition';

/**
 * HomeScreen — Client Component (requires 'use client' for animations/hooks).
 *
 * Uses useTranslations('home') hook — messages are already available
 * via NextIntlClientProvider in the locale layout. No extra fetch needed.
 */
export const HomeScreen = () => {
  const t = useTranslations('home');

  return (
    <PageTransition className="h-full flex items-end">
      <p className="font-semibold tracking-tight text-sm leading-4.5 text-black dark:text-white space-y-1.5">
        <span className="block">{t('hero.bornIn')}</span>
        <span className="block">{t('hero.location')}</span>
        <span className="block">{t('hero.line1')}</span>
        <span className="block">{t('hero.line2')}</span>
        <span className="block">{t('hero.line3')}</span>
        <span className="block">{t('hero.line4')}</span>
        <span className="block">{t('hero.line5')}</span>
        <span className="block">{t('hero.line6')}</span>
        <span className="block">{t('hero.line7')}</span>
        <span className="block">{t('hero.line8')}</span>
        <span className="block">{t('hero.line9')}</span>
        <span className="block">{t('hero.line10')}</span>
        <span className="block">{t('hero.line11')}</span>
      </p>
    </PageTransition>
  );
};
