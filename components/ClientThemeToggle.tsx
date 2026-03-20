'use client';

import dynamic from 'next/dynamic';

const ClientThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });
export default ClientThemeToggle;
