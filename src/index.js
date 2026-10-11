/**
 * Project Atlas demo ranking.
 * This deliberately mirrors ORYNT concepts without being production ranking code.
 */
export function rankProjects(projects, options = {}) {
  const freshnessWeight = options.freshnessWeight ?? 0.5;
  const saveWeight = options.saveWeight ?? 0.35;
  const now = Date.now();

  return projects
    .map((project) => {
      const ageDays = Math.max(0, (now - Date.parse(project.updatedAt)) / 86_400_000);
      const freshness = freshnessWeight * Math.pow(0.5, ageDays / 30);
      const score = project.votes + project.saves * saveWeight + freshness;
      return { ...project, score: Number(score.toFixed(3)) };
    })
    .sort((a, b) => b.score - a.score);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(rankProjects([
    { name: "Project Atlas", votes: 18, saves: 7, updatedAt: new Date().toISOString() },
    { name: "Older Toolkit", votes: 20, saves: 1, updatedAt: "2025-01-01T00:00:00Z" }
  ]));
}
