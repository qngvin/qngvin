'use client';
import dynamic from 'next/dynamic';
import type { MotionValue } from 'framer-motion';

const PageTiltEffect = dynamic(() => import('./PageTiltEffect'), { ssr: false });

type PageTiltEffectWrapperProps = {
  children: React.ReactNode | ((tilt: MotionValue<number>) => React.ReactNode);
};

export default function PageTiltEffectWrapper({ children }: PageTiltEffectWrapperProps) {
  // Forward children as function if provided
  return <PageTiltEffect>{children}</PageTiltEffect>;
}
