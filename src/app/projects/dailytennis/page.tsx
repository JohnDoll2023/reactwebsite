export const generateMetadata = () => {
    return {
      title: 'John Doll | Daily Tennis App',
      description: 'The Daily Tennis App, a project for sharing daily tennis activities and memories.',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
        <GroupPager group="projects" current="/projects/dailytennis" />
        daily tennis
    </div>
  );
}
import { GroupPager } from "../../../components/group-pager/GroupPager";
