export const VISITOR_ROUTE = {
  VISITOR: {
    HOME: "/",
    WORK: "/work",
    ABOUT: "/about",
    CONTACT: "/contact",
    PROJECTS: "/projects",
    PROJECT_DETAIL: (id: string) => `/projects/${id}`,
  },
};