import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | 1SE',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">1SE</h1>
      <div className="relative w-full max-w-2xl aspect-video">
        <Image
          src="/1se.jpg"
          alt="1 second everyday logo"
          fill
          className="object-contain rounded-full"
          priority
        />
      </div>
    </div>
  );
}