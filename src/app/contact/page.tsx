import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Contact Me',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        Contact Me
    </div>
  );
}