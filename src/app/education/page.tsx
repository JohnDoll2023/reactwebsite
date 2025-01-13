import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Education',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        Education
    </div>
  );
}