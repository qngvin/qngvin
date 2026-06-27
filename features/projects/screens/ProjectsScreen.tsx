'use client';

import { useProjects } from '../hooks/useProjects';
import { ProjectItem } from '../components/ProjectItem';
import { ProjectPreviewCard } from '../components/ProjectPreviewCard';
import PageTransition from '@/shared/components/PageTransition';

export const ProjectsScreen = () => {
  const {
    scrollRef,
    showTop,
    showBottom,
    projects,
    hoveredProject,
    handleHover,
    handleProjectClick,
  } = useProjects();

  return (
    <PageTransition className="h-full flex items-center">
      <div className="relative h-[70%] sm:h-[80%] w-full sm:w-[50%]">
        <div
          ref={scrollRef}
          className={`h-full overflow-scroll flex flex-col gap-0 scrollbar-none ${
            showTop && showBottom
              ? 'mask-fade-vertical'
              : !showTop && showBottom
                ? 'mask-fade-bottom'
                : showTop && !showBottom
                  ? 'mask-fade-top'
                  : ''
          }`}
        >
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isActive={hoveredProject === null || hoveredProject.id === project.id}
              onHover={handleHover}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Floating Bottom-Right Video Preview Card */}
      <ProjectPreviewCard
        hoveredProject={hoveredProject}
        onClick={() => hoveredProject && handleProjectClick(hoveredProject.id)}
      />
    </PageTransition>
  );
};
