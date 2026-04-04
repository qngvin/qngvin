import { useTranslations } from 'next-intl';
import { formatMonthYear } from '@/utils/date';
import { WorkType } from '../work.type';

export const WorkDetail: React.FC<WorkType> = ({
  id,
  company,
  startDate,
  endDate,
  linkUrl,
  projectName,
  isProject,
  isDoing,
}) => {
  const t = useTranslations('work');

  return (
    <div className="flex flex-col gap-1 font-montserrat">
      <p className="text-black dark:text-white uppercase text-4xl font-extralight tracking-tight">
        {t(`items.${id}.position`) || projectName}{' '}
      </p>
      {!isProject ? (
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-tighter font-medium">
          @{' '}
          {linkUrl ? (
            <a className="text-sm underline" href={linkUrl}>
              {company}
            </a>
          ) : (
            <span>{company}</span>
          )}
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}
          {' - '} {isDoing ? t('present') : endDate ? formatMonthYear(endDate) : ''}
        </p>
      ) : (
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-tighter font-medium">
          <a className="text-sm underline" href={linkUrl}>
            {t('viewProject')}
          </a>
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}
          {' - '}
          {endDate ? formatMonthYear(endDate) : ''}
        </p>
      )}
      <p className="text-black dark:text-white text-sm font-medium">
        {t(`items.${id}.description`)}
      </p>
    </div>
  );
};
