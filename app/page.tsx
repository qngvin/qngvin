import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale } from '@/lib/i18n/config';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale;
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

/**
 * Server Component — translations fetched on the server, zero client overhead.
 */
export default function HomePage() {
  return <HomeScreen />;
}
