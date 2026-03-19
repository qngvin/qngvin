import { formatMonthYear } from '@/utils/date';
import { WorkType } from '../work.type';

export const WorkDetail: React.FC<WorkType> = ({
  company,
  startDate,
  endDate,
  position,
  linkUrl,
  projectName,
  isProject,
  isDoing,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1 font-montserrat">
      <p className="text-black dark:text-white uppercase text-4xl font-extralight tracking-tight">
        {position || projectName}{' '}
      </p>
      {!isProject ? (
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-tighter font-medium">
          @{' '}
          <a className="text-sm underline" href={linkUrl}>
            {company}
          </a>
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}
          {' - '} {isDoing ? 'Present' : endDate ? formatMonthYear(endDate) : ''}
        </p>
      ) : (
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-tighter font-medium">
          <a className="text-sm underline" href={linkUrl}>
            View Project
          </a>
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}
          {' - '}
          {endDate ? formatMonthYear(endDate) : ''}
        </p>
      )}
      <p className="text-black dark:text-white text-sm font-medium">{description}</p>
    </div>
  );
};
