import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | St. Mark\'s',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        St. Mark's
    </div>
  );
}