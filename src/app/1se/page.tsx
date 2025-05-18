import Image from "next/image";

export const generateMetadata = () => {
    return {
      title: 'John Doll | 1SE',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bErCtb9BbKw?si=p6VoX7tzeJhE64-I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}