import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Marathon',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        Marathon
    </div>
  );
}