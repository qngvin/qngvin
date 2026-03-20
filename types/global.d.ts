import en_common from '@/messages/en/common.json';
import en_home from '@/messages/en/home.json';
import en_auth from '@/messages/en/auth.json';

/**
 * Augments next-intl's Messages type with our exact JSON shapes.
 * This gives full IntelliSense and compile-time errors for all translation keys.
 *
 * Usage (Server Component):
 *   const t = await getTranslations('home');
 *   t('hero.bornIn') ✅   t('hero.wrong') ❌ compile error
 *
 * Usage (Client Component):
 *   const t = useTranslations('common');
 *   t('nav.home') ✅   t('nav.typo') ❌ compile error
 */
type Messages = {
  common: typeof en_common;
  home: typeof en_home;
  auth: typeof en_auth;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
