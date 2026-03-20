'use client';

import { useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/lib/i18n/config';

/**
 * LanguageSwitcher — Client Component.
 *
 * Updates the locale cookie and localStorage, then triggers a router.refresh()
 * so the server can re-render with the new locale.
 */
const setLocaleCookie = (locale: string) => {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
};

export default function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Sync localStorage with current locale from server response
  useEffect(() => {
    if (locale) {
      localStorage.setItem('NEXT_LOCALE', locale);
    }
  }, [locale]);

  const handleLocaleChange = () => {
    if (isPending) return;
    const nextLocale = locale === 'vi' ? 'en' : 'vi';

    // Set cookie
    setLocaleCookie(nextLocale);

    // Set localStorage
    localStorage.setItem('NEXT_LOCALE', nextLocale);

    // Trigger server refresh to re-fetch translations based on new cookie
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className="flex flex-col gap-1 items-center cursor-pointer select-none"
      onClick={handleLocaleChange}
      aria-label={t('language.switchTo')}
    >
      <span
        className={`whitespace-nowrap text-[15px] tracking-[3px] font-light rotate-180 transition-opacity ${
          isPending ? 'opacity-50' : 'opacity-100 text-black dark:text-white'
        }`}
        style={{ writingMode: 'vertical-rl' }}
      >
        {locale === 'vi' ? 'VN' : 'EN'}
      </span>
    </div>
  );
}
