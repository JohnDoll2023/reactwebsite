import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | 1SE',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        1 second everyday
    </div>
  );
}