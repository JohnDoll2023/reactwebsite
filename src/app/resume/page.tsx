import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Resume',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
        <iframe
          src="/Resume.pdf"
          className="rounded-2xl w-full max-w-4xl h-[80vh]"
          title="Resume"
        />
    </div>
  );
}