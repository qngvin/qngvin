import type { Metadata } from "next";
import './globals.css';
import { BackgroundMain } from "@/shared/components/BackgroundMain";
import { Header } from "@/shared/layout/Header/Header";
import Footer from "@/shared/layout/Footer/Footer";
import PreviewWrapper from "@/shared/components/PreviewWrapper";
import { neueMontreal } from "./fonts";

export const metadata: Metadata = {
  title: "qngvin",
  description: "Portfolio Qngvin - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${neueMontreal.variable} font-neue-montreal antialiased bg-black`}
      >
        <PreviewWrapper>
          <div className="py-4 sm:py-10 px-4 sm:px-10 h-screen w-full bg-[#100D08] dark:bg-black">
            <div className="relative flex flex-col justify-between border border-[#ffffff63] h-[calc(100vh-(--spacing(4))-(--spacing(4)))] sm:h-[calc(100vh-(--spacing(10))-(--spacing(10)))]">
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
