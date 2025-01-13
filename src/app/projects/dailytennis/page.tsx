import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Daily Tennis App',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        daily tennis
    </div>
  );
}