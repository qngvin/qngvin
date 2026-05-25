'use client';

import { useRef, useState, useEffect } from 'react';
import { works } from '../work.contants';
import { WorkType } from '../work.type';

export interface UseWorkReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  showTop: boolean;
  showBottom: boolean;
  works: WorkType[];
}

export const useWork = (): UseWorkReturn => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowTop(el.scrollTop > 0);
      setShowBottom(el.scrollTop + el.clientHeight < el.scrollHeight);
    };

    handleScroll();
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollRef,
    showTop,
    showBottom,
    works,
  };
};
