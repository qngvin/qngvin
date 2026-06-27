'use client';

import { useTranslations } from 'next-intl';
import { ContactType } from '../screens/contact.contants';

export interface UseContactReturn {
  t: ReturnType<typeof useTranslations<'contact'>>;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export const useContact = (): UseContactReturn => {
  const t = useTranslations('contact');
  return {
    t,
    email: ContactType.Email,
    linkedin: ContactType.LinkedIn,
    github: ContactType.GitHub,
    instagram: ContactType.Instagram,
  };
};
