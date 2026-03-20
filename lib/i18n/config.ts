/**
 * Central i18n configuration — single source of truth for locales.
 * Add new locales here and they'll propagate everywhere automatically.
 */

export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Human-readable labels for each locale — used in LanguageSwitcher */
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};

/** BCP-47 locale tags for html[lang] and hreflang */
export const localeBCP47: Record<Locale, string> = {
  en: 'en-US',
  vi: 'vi-VN',
};
