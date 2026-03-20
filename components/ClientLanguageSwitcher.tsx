'use client';

import dynamic from 'next/dynamic';

const ClientLanguageSwitcher = dynamic(() => import('@/components/LanguageSwitcher'), { ssr: false });
export default ClientLanguageSwitcher;
