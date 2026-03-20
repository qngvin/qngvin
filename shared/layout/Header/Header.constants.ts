import { VISITOR_ROUTE } from '@/shared/constants/route';

export type HeaderItem = {
  id: number;
  labelKey: string;
  link: string;
};

export const headerItems: HeaderItem[] = [
  {
    id: 1,
    labelKey: 'nav.home',
    link: VISITOR_ROUTE.VISITOR.HOME,
  },
  {
    id: 2,
    labelKey: 'nav.work',
    link: VISITOR_ROUTE.VISITOR.WORK,
  },
  {
    id: 3,
    labelKey: 'nav.about',
    link: VISITOR_ROUTE.VISITOR.ABOUT,
  },
  {
    id: 4,
    labelKey: 'nav.contact',
    link: VISITOR_ROUTE.VISITOR.CONTACT,
  },
];
