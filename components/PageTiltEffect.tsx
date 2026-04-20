'use client';
import { motion } from 'framer-motion';
import { usePageTiltEffect } from '../hooks/usePageTiltEffect';

// Allow children to be a function to receive tilt value
type PageTiltEffectProps = {
  children: React.ReactNode | ((tilt: ReturnType<typeof usePageTiltEffect>) => React.ReactNode);
};

export default function PageTiltEffect({ children }: PageTiltEffectProps) {
  const tilt = usePageTiltEffect();
  return (
    <motion.div
      style={{
        rotateZ: tilt,
        willChange: 'transform',
      }}
    >
      {typeof children === 'function' ? children(tilt) : children}
    </motion.div>
  );
}
