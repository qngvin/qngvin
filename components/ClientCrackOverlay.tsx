'use client';
import CrackOverlay from './CrackOverlay';
import { ReactNode } from 'react';
export default function ClientCrackOverlay({ children }: { children: ReactNode }) {
  return <CrackOverlay>{children}</CrackOverlay>;
}
