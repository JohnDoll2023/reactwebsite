import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Marathon',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Marathon</h1>
      <div className="relative w-full max-w-2xl aspect-video">
        <Image
          src="/mpc.png"
          alt="Marathon logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}