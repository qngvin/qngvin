'use client';

import Link from 'next/link';
import { GoArrowLeft, GoLinkExternal } from 'react-icons/go';
import { VscGithub } from 'react-icons/vsc';
import { useProjectDetail } from '../hooks/useProjectDetail';
import { VISITOR_ROUTE } from '@/shared/constants/route';
import PageTransition from '@/shared/components/PageTransition';

interface ProjectDetailScreenProps {
  id: string;
}

export const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({ id }) => {
  const { project, statusLabel, statusDotColor } = useProjectDetail(id);

  return (
    <PageTransition className="h-full flex items-center">
      <div className="flex flex-col gap-6 w-full sm:w-2/3 max-w-xl font-montserrat">
        {/* Back link */}
        <Link
          href={VISITOR_ROUTE.VISITOR.PROJECTS}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors font-medium w-fit"
        >
          <GoArrowLeft size={14} />
          Projects
        </Link>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusDotColor}`} />
          <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium">
            {statusLabel} · {project.year}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-extralight tracking-tight uppercase leading-tight">
          {project.name}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
          {project.longDescription ?? project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-medium">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-widest font-medium px-2 py-0.5 border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.linkUrl || project.githubUrl) && (
          <div className="flex items-center gap-5 pt-2">
            {project.linkUrl && (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black dark:text-white hover:opacity-60 transition-opacity"
              >
                <GoLinkExternal size={13} />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black dark:text-white hover:opacity-60 transition-opacity"
              >
                <VscGithub size={13} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
};
