import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | 1SE',
    };
  };

export default function Home() {
  const yearVideos = [
    "https://www.youtube.com/embed/bErCtb9BbKw?si=D8Za9j1x_5WbxgiH",
    "https://www.youtube.com/embed/0wUzu3jBxv0?si=uCDWsWwU_umb5Gps",
    "https://www.youtube.com/embed/KMg3f-rbHRg?si=J7hIyekffCfOyc_j",
    "https://www.youtube.com/embed/IpYX3x2q3HE?si=n9-quGkx1VVsUN1N",
    "https://www.youtube.com/embed/U1x9bChA4kg?si=gRmKnqhGmVDrsT-m",
    "https://www.youtube.com/embed/moU395TJJUU?si=bkiHDbOl89DKl1Rm",
    "https://www.youtube.com/embed/ovLwd2KnGKE?si=Kk_MBFYoQQvyga3i",
    "https://www.youtube.com/embed/k2g51A6goRI?si=DsTRd16oU9rt4qv9",
    "https://www.youtube.com/embed/JjEdeWdaqmA?si=EP80Y1nEHAG4bp3f",
  ];

  const compilationVideos = [
    "https://www.youtube.com/embed/WDesM1PBk0g?si=0vIweb6qEoX_aUEr",
    "https://www.youtube.com/embed/LOuD-mXLOTU?si=AEro5RZb2aBg0BBo",
    "https://www.youtube.com/embed/TBkb0FiWxQM?si=RNhS1W5F6cHMkMaY",
  ];

  return (
    <div className="flex flex-1 justify-center px-4 py-8 md:px-8">
      <div className="w-full max-w-7xl space-y-12">
        <h2 className="text-center">1 Second Everyday</h2>

        <section className="grid grid-cols-1 items-center gap-8 rounded-xl border border-gray-300/70 bg-gray-100/40 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/40 md:p-8 lg:grid-cols-2">
          <div className="relative mx-auto aspect-video w-full max-w-2xl">
            <Link href="https://1se.co" target="_blank" rel="noopener noreferrer">
              <Image
                src="/1se_logo.png"
                alt="1 second everyday logo"
                fill
                className="rounded-lg object-contain"
                priority
              />
            </Link>
          </div>
          <p className="text-base leading-relaxed md:text-lg">
            1 Second Everyday is a project that encourages users to record one second of video every day,
            creating a time capsule of their lives over the course of a year. I started my journey with 1SE
            on January 1, 2017 in the middle of my sophomore year of high school and have been going every day since then. 
            Feel free to look through my life below...
          </p>
        </section>

        <section className="space-y-4">
          <h3>Years</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {yearVideos.map((videoSrc) => (
              <iframe
                key={videoSrc}
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full rounded-lg border border-gray-300/70 shadow-sm dark:border-gray-700"
              />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3>Compilations</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {compilationVideos.map((videoSrc) => (
              <iframe
                key={videoSrc}
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full rounded-lg border border-gray-300/70 shadow-sm dark:border-gray-700"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}