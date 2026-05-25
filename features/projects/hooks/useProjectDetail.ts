'use client';

import { notFound } from 'next/navigation';
import { projects } from '../projects.constants';
import { ProjectType } from '../projects.type';

const STATUS_LABELS: Record<ProjectType['status'], string> = {
  'in-progress': 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
};

const STATUS_DOT_COLORS: Record<ProjectType['status'], string> = {
  'in-progress': 'bg-emerald-500',
  completed: 'bg-gray-400 dark:bg-gray-500',
  archived: 'bg-gray-300 dark:bg-gray-600',
};

export interface UseProjectDetailReturn {
  project: ProjectType;
  statusLabel: string;
  statusDotColor: string;
}

export const useProjectDetail = (id: string): UseProjectDetailReturn => {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return {
    project,
    statusLabel: STATUS_LABELS[project.status],
    statusDotColor: STATUS_DOT_COLORS[project.status],
  };
};
