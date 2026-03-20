import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { Locale, defaultLocale, locales } from './config';

/**
 * Per-request server config:
 * - Reads locale from cookies
 * - Lazy-loads ONLY the active locale's messages (no wasted bandwidth)
 * - Merges all namespace JSON files into a single messages object
 * - Falls back to defaultLocale if locale is somehow invalid
 */
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  // Validate the incoming locale against our supported list
  let locale = cookieLocale as Locale;
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  // Merge all namespace JSONs for the active locale
  const [common, home, auth] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/home.json`),
    import(`@/messages/${locale}/auth.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      home: home.default,
      auth: auth.default,
    },
    // Silently use the key as fallback when a translation is missing
    onError(error) {
      if (error.code !== 'MISSING_MESSAGE') {
        console.error('[next-intl]', error);
      }
    },
    getMessageFallback({ namespace, key }) {
      return [namespace, key].filter(Boolean).join('.');
    },
  };
});
