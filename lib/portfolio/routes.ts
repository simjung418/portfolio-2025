export type RoutePath = "/" | "/about" | "/skills" | "/projects" | "/career";

export const ROUTES = {
  "/": "Home",
  "/career": "Career",
  "/skills": "Skills",
  "/projects": "Projects",
  "/about": "About",
} as const satisfies Record<RoutePath, string>;