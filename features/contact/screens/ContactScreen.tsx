'use client';

import { useContact } from '../hooks/useContact';
import PageTransition from '@/shared/components/PageTransition';

const ContactScreen = () => {
  const { t, email, linkedin, github, instagram } = useContact();

  return (
    <PageTransition className="h-full w-1/3 flex flex-col justify-center tracking-tight font-montserrat">
      <p className="text-black dark:text-white font-bold text-[17px]">
        {t('emailLabel')}{' '}
        <a
          href={`mailto:${email}`}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
        >
          {email}
        </a>
      </p>
      <p className="text-black dark:text-white tracking-[-0.03em] text-[17px] mb-4">
        <span className="font-bold">{t('internetLabel')} </span>
        <a
          href={linkedin}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('platforms.linkedin')}
        </a>
        {' / '}
        <a
          href={github}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('platforms.github')}
        </a>
        {' / '}
        <a
          href={instagram}
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
