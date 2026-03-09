export type RoutePath = "/" | "/about" | "/skills" | "/projects" | "/career";

export const ROUTES = {
  "/": "Home",
  "/career": "Career",
  "/projects": "Projects",
  "/skills": "Skills",
  "/about": "About",
} as const satisfies Record<RoutePath, string>;