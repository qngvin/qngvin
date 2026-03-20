'use client';

import dynamic from 'next/dynamic';

const ClientBackgroundMain = dynamic(
  () => import('@/shared/components/BackgroundMain').then((mod) => mod.BackgroundMain),
  { ssr: false }
);

export default ClientBackgroundMain;
