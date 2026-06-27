'use client';

import { useWork } from '../hooks/useWork';
import { WorkDetail } from '../components/WorkDetail';
import PageTransition from '@/shared/components/PageTransition';

export const WorkScreen = () => {
  const { scrollRef, showTop, showBottom, works } = useWork();

  return (
    <PageTransition className="h-full flex items-center">
      <div className="relative h-[60%] sm:h-[75%] w-full sm:w-1/2">
        <div
          ref={scrollRef}
          className={`h-full overflow-scroll flex flex-col gap-10 scrollbar-none ${
            showTop && showBottom
              ? ' mask-fade-vertical'
              : !showTop && showBottom
                ? ' mask-fade-bottom'
                : showTop && !showBottom
                  ? ' mask-fade-top'
                  : ''
          }`}
        >
          {works.map((work) => (
            <WorkDetail key={work.id} {...work} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
