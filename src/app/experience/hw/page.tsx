import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Hospitality Wifi',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        Hospitality Wifi
    </div>
  );
}