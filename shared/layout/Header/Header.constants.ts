import { VISITOR_ROUTE } from "@/shared/constants/route";

export type HeaderItem = {
  id: number;
  label: string;
  link: string;
};

export const headerItems: HeaderItem[] = [
  {
    id: 1,
    label: "home",
    link: VISITOR_ROUTE.VISITOR.HOME,
  },
  {
    id: 2,
    label: "work",
    link: VISITOR_ROUTE.VISITOR.WORK,
  },
  {
    id: 3,
    label: "about",
    link: VISITOR_ROUTE.VISITOR.ABOUT,
  },
  {
    id: 4,
    label: "contact",
    link: VISITOR_ROUTE.VISITOR.CONTACT,
  }
];