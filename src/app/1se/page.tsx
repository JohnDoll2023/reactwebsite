import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
    return {
      title: 'John Doll | 1SE',
    };
  };

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center p-8">
      <div>
        <h2>1 Second Everyday</h2>
      </div>
      <div className="flex flex-1 flex-row">
        <div className="relative w-full max-w-2xl aspect-video">
          <Link href="https://1se.co" target="_blank">
            <Image
              src="/1se_logo.png"
              alt="1 second everyday logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div>
          <p>
            1 Second Everyday is a project that encourages users to record one second of video every day, creating a time capsule of their lives over the course of a year.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start w-full mt-10">
        <div>
          <h3>Years</h3>
        </div>
        <div className="flex flex-wrap justify-around w-full gap-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bErCtb9BbKw?si=D8Za9j1x_5WbxgiH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0wUzu3jBxv0?si=uCDWsWwU_umb5Gps" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KMg3f-rbHRg?si=J7hIyekffCfOyc_j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IpYX3x2q3HE?si=n9-quGkx1VVsUN1N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/U1x9bChA4kg?si=gRmKnqhGmVDrsT-m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/moU395TJJUU?si=bkiHDbOl89DKl1Rm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ovLwd2KnGKE?si=Kk_MBFYoQQvyga3i" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/k2g51A6goRI?si=DsTRd16oU9rt4qv9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
        </div>
      </div>
      <div className="flex flex-col items-start w-full mt-20">
        <div>
          <h3>Compilations</h3>
        </div>
        <div className="flex flex-wrap justify-around w-full gap-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WDesM1PBk0g?si=0vIweb6qEoX_aUEr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LOuD-mXLOTU?si=AEro5RZb2aBg0BBo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TBkb0FiWxQM?si=RNhS1W5F6cHMkMaY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="flex-shrink-0"></iframe>
        </div>
      </div>
    </div>
  );
}