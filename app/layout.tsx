import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale } from '@/lib/i18n/config';
import './globals.css';
import { Header } from '@/shared/layout/Header/Header';
import Footer from '@/shared/layout/Footer/Footer';
import PreviewWrapper from '@/shared/components/PreviewWrapper';
import { neueMontreal, rubik } from './fonts';
import ClientThemeToggle from '@/components/ClientThemeToggle';
import ClientBackgroundMain from '@/shared/components/ClientBackgroundMain';
import ClientLanguageSwitcher from '@/components/ClientLanguageSwitcher';

/**
 * Generate locale-specific metadata for SEO.
 */
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    metadataBase: new URL('https://qngvin.com'), // Replace with actual production URL
    title: {
      default: t('meta.title'),
      template: `%s | ${t('meta.title')}`,
    },
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: '/',
      siteName: t('meta.title'),
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale;

  // Fetch ONLY this locale's messages (lazy loading — no wasted bandwidth)
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${neueMontreal.variable} ${rubik.variable} antialiased bg-white dark:bg-black`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <PreviewWrapper>
            <div className="py-4 sm:py-10 px-4 sm:px-16 h-screen w-full bg-white dark:bg-[#100D08]">
              <div className="relative flex flex-col justify-between border border-black dark:border-[#ffffff63] h-[calc(100vh-(--spacing(4))-(--spacing(4)))] sm:h-[calc(100vh-(--spacing(10))-(--spacing(10)))]">
                <div className="absolute bottom-0 -left-7 z-9999 flex flex-col gap-4">
                  <ClientLanguageSwitcher />
                  <ClientThemeToggle />
                </div>
                <ClientBackgroundMain />
                <Header />
                <div className="relative p-10 h-full">{children}</div>
                <Footer />
              </div>
            </div>
          </PreviewWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
