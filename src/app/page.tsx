import EmblaCarousel from '../components/embla-carousel/EmblaCarousel';
import "../components/embla-carousel/embla.css";
import { EmblaOptionsType } from 'embla-carousel';
import Link from "next/link";
import HomeIntro from "./HomeIntro";

const PROJECT_SLIDES = [
  { label: "Website 3.0", link: "/projects/website3" },
  { label: "Website 2.0", link: "/projects/website2" },
  { label: "Website 1.0", link: "/projects/website1" },
  { label: "COVID", link: "/projects/covid" },
  { label: "Checkers", link: "/projects/checkers" },
];

const EXPERIENCE_SLIDES = [
  { label: "Lutron", link: "/experience/lutron" },
  { label: "Amazon (2022)", link: "/experience/amazon2022" },
  { label: "Amazon (2021)", link: "/experience/amazon2021" },
  { label: "Hospitality Wifi", link: "/experience/hw" },
  { label: "St. Mark's", link: "/experience/stmarks" },
  { label: "Marathon", link: "/experience/marathon" },
];

const EDUCATION_SLIDES = [
  { label: "University of Illinois", link: "/education/illinois" },
  { label: "Miami University", link: "/education/miami" },
  { label: "Wapakoneta High School", link: "/education/wapak" },
];
const OPTIONS: EmblaOptionsType = { loop: true }
export default function Home() {
  return (
    <main className="flex-1 mt-3">
      <div className="flex flex-col w-full flex-1 min-h-0 md:min-h-[calc(100vh-4rem)]">
        <HomeIntro />
        <h1 className="py-10 md:py-0 flex-shrink-0 w-full justify-center flex mb-2">
          More about me
        </h1>
      </div>
      <div>
        <h2 className="pb-2 pl-2"><Link href="/experience">Experience</Link></h2>
        <EmblaCarousel slides={EXPERIENCE_SLIDES} options={OPTIONS} />
        <h2 className="pt-12 pb-2 pl-2"><Link href="/projects">Projects</Link></h2>
        <EmblaCarousel slides={PROJECT_SLIDES} options={OPTIONS} />
        <h2 className="pt-12 pb-2 pl-2"><Link href="/education">Education</Link></h2>
        <EmblaCarousel slides={EDUCATION_SLIDES} options={OPTIONS} />
        <br></br>
      </div>
    </main>
  );
}
