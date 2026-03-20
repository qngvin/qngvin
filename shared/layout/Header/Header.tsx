import { useTranslations } from 'next-intl';
import ActiveLink from '@/shared/components/ActiveLink';
import { headerItems } from './Header.constants';

/**
 * Header — Server Component.
 * Uses useTranslations (works in server components through next-intl's
 * server-side integration). Nav labels are now translated.
 */
export const Header = () => {
  const t = useTranslations('common');

  return (
    <div className="flex flex-col text-black dark:text-white absolute z-50 top-0 right-0 p-10">
      <p className="text-3xl font-extralight">tran quang vinh.</p>
      <div className="flex flex-col items-end relative">
        {headerItems.map((item) => (
          <ActiveLink
            key={item.id}
            href={item.link}
            className="group h-7 leading-7 text-sm font-bold text-black dark:text-white dark:hover:text-grayMax duration-300 ease-in-out relative"
            activeClassName="text-black dark:text-white after:scale-x-100 leading-7"
            exact
          >
            {t(item.labelKey)}
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};
