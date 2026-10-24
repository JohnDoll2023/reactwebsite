import ProjectsOverview from "./ProjectsOverview";

export const generateMetadata = () => ({
  title: "John Doll | Projects",
  description: "Software projects by John Doll, including personal websites, data visualization, games, and web applications.",
});

export default function ProjectsPage() {
  return <ProjectsOverview />;
}
