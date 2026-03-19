import type { Metadata } from 'next';
import './globals.css';
import { BackgroundMain } from '@/shared/components/BackgroundMain';
import { Header } from '@/shared/layout/Header/Header';
import Footer from '@/shared/layout/Footer/Footer';
import PreviewWrapper from '@/shared/components/PreviewWrapper';
import { neueMontreal, rubik } from './fonts';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'qngvin',
  description: 'Portfolio Qngvin - Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable}  ${rubik.variable} antialiased bg-white dark:bg-black`}
      >
        <PreviewWrapper>
          <div className="py-4 sm:py-10 px-4 sm:px-16 h-screen w-full bg-white dark:bg-[#100D08]">
            <div className="relative flex flex-col justify-between border border-black dark:border-[#ffffff63] h-[calc(100vh-(--spacing(4))-(--spacing(4)))] sm:h-[calc(100vh-(--spacing(10))-(--spacing(10)))]">
              <div className="absolute bottom-0 -left-7 z-9999">
                <ThemeToggle />
              </div>
              <BackgroundMain />
              <Header />
              <div className="relative p-10 h-full">{children}</div>
              <Footer />
            </div>
          </div>
        </PreviewWrapper>
      </body>
    </html>
  );
}
