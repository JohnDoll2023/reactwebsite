export const generateMetadata = () => {
    return {
      title: 'John Doll | Daily Tennis App',
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
