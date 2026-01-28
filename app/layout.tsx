import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Rubik } from "next/font/google";
import './globals.css';
import { BackgroundMain } from "@/shared/components/BackgroundMain";
import { Header } from "@/shared/layout/Header/Header";
import Footer from "@/shared/layout/Footer/Footer";
import PreviewWrapper from "@/shared/components/PreviewWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
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
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} ${rubik.variable} font-montserrat antialiased bg-black`}
      >
        <PreviewWrapper>
          <div className="py-10 px-18 h-screen w-full bg-[#100D08] dark:bg-black">
            <div className="relative flex flex-col justify-between border border-[#ffffff63] h-[calc(100vh-(--spacing(10))-(--spacing(10)))]">
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
