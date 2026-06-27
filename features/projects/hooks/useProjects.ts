'use client';

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { projects } from '../projects.constants';
import { ProjectType } from '../projects.type';
import { VISITOR_ROUTE } from '@/shared/constants/route';

const STATUS_DOT_COLORS: Record<ProjectType['status'], string> = {
  'in-progress': 'bg-emerald-500',
  completed: 'bg-gray-400 dark:bg-gray-500',
  archived: 'bg-gray-300 dark:bg-gray-600',
};

export interface UseProjectsReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  showTop: boolean;
  showBottom: boolean;
  projects: ProjectType[];
  hoveredProject: ProjectType | null;
  handleHover: (id: string | null) => void;
  statusDotColors: Record<ProjectType['status'], string>;
  statusKey: string;
  statusLabel: string;
  handleProjectClick: (id: string) => void;
}

export const useProjects = (): UseProjectsReturn => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('projects');
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<ProjectType | null>(null);

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

  const handleHover = (id: string | null) => {
    if (id === null) {
      setHoveredProject(null);
      return;
    }
    const found = projects.find((p) => p.id === id) ?? null;
    setHoveredProject(found);
  };

  const handleProjectClick = (id: string) => {
    router.push(VISITOR_ROUTE.VISITOR.PROJECT_DETAIL(id));
  };

  const statusKey =
    hoveredProject?.status === 'in-progress'
      ? 'inProgress'
      : (hoveredProject?.status ?? 'completed');

  const statusLabel = t(`status.${statusKey}`);

  return {
    scrollRef,
    showTop,
    showBottom,
    projects,
    hoveredProject,
    handleHover,
    statusDotColors: STATUS_DOT_COLORS,
    statusKey,
    statusLabel,
    handleProjectClick,
  };
};
