'use client';

import { motion } from 'framer-motion';
import { ProjectType } from '../projects.type';

interface ProjectItemProps {
  project: ProjectType;
  isActive: boolean;
  onHover: (id: string | null) => void;
  onClick: () => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  isActive,
  onHover,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      animate={{ opacity: isActive ? 1 : 0.4 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="group flex flex-col gap-1.5 cursor-pointer py-6 border-b border-black/10 dark:border-white/10 last:border-none font-montserrat"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-black dark:text-white font-extralight text-2xl sm:text-4xl tracking-tight uppercase leading-none group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {project.name}
        </p>
        <span className="text-sm font-semibold tabular-nums text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">
          {project.year}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-0.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-black dark:text-white font-light leading-relaxed line-clamp-2 group-hover:text-black dark:group-hover:text-white transition-colors mt-1">
        {project.description}
      </p>
    </motion.div>
  );
};
