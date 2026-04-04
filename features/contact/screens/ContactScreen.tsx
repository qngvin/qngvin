'use client';

import { useTranslations } from 'next-intl';
import PageTransition from '@/shared/components/PageTransition';
import { ContactType } from './contact.contants';

const ContactScreen = () => {
  const t = useTranslations('contact');

  return (
    <PageTransition className="h-full w-1/3 flex flex-col justify-center tracking-tight font-montserrat">
      <p className="text-black dark:text-white font-bold text-[17px]">
        {t('emailLabel')}{' '}
        <a
          href={`mailto:${ContactType.Email}`}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
        >
          {ContactType.Email}
        </a>
      </p>
      <p className="text-black dark:text-white tracking-[-0.03em] text-[17px] mb-4">
        <span className="font-bold">{t('internetLabel')} </span>
        <a
          href={ContactType.LinkedIn}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('platforms.linkedin')}
        </a>
        {' / '}
        <a
          href={ContactType.GitHub}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('platforms.github')}
        </a>
        {' / '}
        <a
          href={ContactType.Instagram}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('platforms.instagram')}
        </a>
      </p>
    </PageTransition>
  );
};

export default ContactScreen;
