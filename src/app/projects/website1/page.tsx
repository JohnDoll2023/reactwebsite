import Link from "next/link";
import ScreenshotGallery from "./ScreenshotGallery";

export const generateMetadata = () => {
  return {
    title: "John Doll | Website 1.0",
    description:
      "An archive of my first personal website, built in late 2020 with HTML, CSS, JavaScript, and Bootstrap.",
  };
};

const pageScreenshots = [
  {
    src: "/projects/website1/indexbig.png",
    alt: "Website 1.0 home page screenshot",
    title: "Home",
  },
  {
    src: "/projects/website1/projects.png",
    alt: "Website 1.0 projects page screenshot",
    title: "Projects",
  },
  {
    src: "/projects/website1/resume.png",
    alt: "Website 1.0 resume page screenshot",
    title: "Resume",
  },
  {
    src: "/projects/website1/qualifications.png",
    alt: "Website 1.0 qualifications page screenshot",
    title: "Qualifications",
  },
  {
    src: "/projects/website1/contact.png",
    alt: "Website 1.0 contact page screenshot",
    title: "Contact",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,82,48,0.14),_transparent_40%),linear-gradient(180deg,#f8faf6_0%,#eef4ea_48%,#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
          <div className="space-y-5">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Website 1.0
            </h1>
            <p className="max-w-4xl text-base leading-7 text-slate-700 md:text-lg">
              This is my first ever public-facing website. The pages shown are everything included
              in the old site: Home, Projects, Resume, Qualifications, and
              Contact.
            </p>
          </div>
        </div>

        <ScreenshotGallery screenshots={pageScreenshots} />

        <div className="rounded-[1.5rem] border border-[#255230]/20 bg-[#255230]/8 p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Website timeline</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            I built this website in the middle of my sophomore year of college in late 2020 using only HTML, CSS, and JavaScript. 
            It was simple and foundational, and it wasn't pretty, the backend was where I was learning the most, and was what I really care about.
            I started to scratch the surface with AWS and cloud computing.The frontend was proof that the backend was working. 
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/projects/website2"
              className="rounded-full border border-[#255230]/20 bg-white px-4 py-2 text-sm font-semibold text-[#255230] transition hover:border-[#255230]/40 hover:bg-[#f5faf3]"            >
              View Website 2.0
            </Link>
            <Link
              href="/projects/website3"
              className="rounded-full border border-[#255230]/20 bg-white px-4 py-2 text-sm font-semibold text-[#255230] transition hover:border-[#255230]/40 hover:bg-[#f5faf3]"
            >
              View Website 3.0
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}