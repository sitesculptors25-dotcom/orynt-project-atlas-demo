export type ProjectHealth = {
  stars: number;
  forks: number;
  openIssues: number;
  archived: boolean;
  lastPushedAt: string;
};

export type AtlasProject = {
  name: string;
  summary: string;
  categories: string[];
  keywords: string[];
  health: ProjectHealth;
};

export const demoProject: AtlasProject = {
  name: "Project Atlas",
  summary: "A complete demonstration record for the ORYNT detail experience.",
  categories: ["Developer Tools", "Data & Analytics", "Web Development"],
  keywords: ["discovery", "catalog", "open-source", "ranking"],
  health: {
    stars: 0,
    forks: 0,
    openIssues: 0,
    archived: false,
    lastPushedAt: new Date().toISOString(),
  },
};
