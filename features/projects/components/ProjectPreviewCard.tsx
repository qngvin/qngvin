'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GoLinkExternal } from 'react-icons/go';
import { VscGithub } from 'react-icons/vsc';
import { ProjectType } from '../projects.type';

interface ProjectPreviewCardProps {
  hoveredProject: ProjectType | null;
  onClick: () => void;
}

const statusDotColors: Record<ProjectType['status'], string> = {
  'in-progress': 'bg-emerald-500',
  completed: 'bg-gray-400 dark:bg-gray-500',
  archived: 'bg-gray-300 dark:bg-gray-600',
};

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  hoveredProject,
  onClick,
}) => {
  const t = useTranslations('projects');

  const statusKey =
    hoveredProject?.status === 'in-progress'
      ? 'inProgress'
      : (hoveredProject?.status ?? 'completed');
  const statusLabel = t(`status.${statusKey}`);

  return (
    <AnimatePresence mode="wait">
      {hoveredProject && hoveredProject.videoUrl && (
        <motion.div
          key={hoveredProject.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={onClick}
          className="fixed bottom-8 right-14 z-20 hidden sm:flex flex-col overflow-hidden w-[360px] lg:w-[420px] bg-white/5 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl cursor-pointer group/card"
        >
          {/* Video Container */}
          <div className="relative w-full aspect-video overflow-hidden bg-black/20 border-b border-black/5 dark:border-white/10">
            <video
              key={hoveredProject.videoUrl}
              src={hoveredProject.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Content Details */}
          <div className="p-5 flex flex-col gap-3 font-montserrat">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-black dark:text-white uppercase tracking-tight">
                {hoveredProject.name}
              </p>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${statusDotColors[hoveredProject.status]}`}
                />
                <span className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50 font-semibold">
                  {statusLabel} · {hoveredProject.year}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              {hoveredProject.description}
            </p>

            {/* Action Buttons */}
            {(hoveredProject.linkUrl || hoveredProject.githubUrl) && (
              <div className="flex items-center gap-4 mt-2">
                {hoveredProject.linkUrl && (
                  <a
                    href={hoveredProject.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity shadow-md"
                  >
                    <GoLinkExternal size={11} />
                    {t('viewLive')}
                  </a>
                )}
                {hoveredProject.githubUrl && (
                  <a
                    href={hoveredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 border border-black/10 dark:border-white/15 text-black dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors shadow-sm"
                  >
                    <VscGithub size={11} />
                    {t('github')}
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
