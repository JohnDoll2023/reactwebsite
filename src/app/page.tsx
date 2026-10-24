import "../components/embla-carousel/embla.css";
import { EmblaOptionsType } from 'embla-carousel';
import HomeIntro from "./HomeIntro";
import HomeCarousels from "./HomeCarousels";

const PROJECT_SLIDES = [
  { label: "Website 3.0", link: "/projects/website3", summary: "This website, built with and optimized by React and Next.js." },
  { label: "Website 2.0", link: "/projects/website2", summary: "My second iteration of my website with an improved experience on AWS." },
  { label: "Website 1.0", link: "/projects/website1", summary: "My first public-facing website." },
  { label: "COVID", link: "/projects/covid", summary: "A public, interactive dashboard for exploring COVID-19 data and trends." },
  { label: "Checkers", link: "/projects/checkers", summary: "A checkers game built with Java in my intro computer science course." },
];

const EXPERIENCE_SLIDES = [
  { label: "Lutron", link: "/experience/lutron", summary: "I currently work at Lutron Electronics as a Senior DevOps Engineer on the Central DevOps Team." },
  { label: "Amazon (2022)", link: "/experience/amazon2022", summary: "My second Amazon internship, where I worked on machine learning project and built 3 mobile apps." },
  { label: "Amazon (2021)", link: "/experience/amazon2021", summary: "My first Amazon internship, focused on web app development for metric reporting." },
  { label: "Hospitality Wifi", link: "/experience/hw", summary: "My first internship where I installed, configured, and supported wireless networks for hospitality spaces." },
  { label: "St. Mark's", link: "/experience/stmarks", summary: "Early technology experience operating sound equipment, livestreaming, and church events." },
  { label: "Marathon", link: "/experience/marathon", summary: "An early experience where I developed teamwork, reliability, and industry skills." },
];

const EDUCATION_SLIDES = [
  { label: "University of Illinois", link: "/education/illinois", summary: "Graduate computer science major focused on expanding my software engineering foundation." },
  { label: "Miami University", link: "/education/miami", summary: "My undergraduate computer science experience in Oxford, Ohio." },
  { label: "Wapakoneta High School", link: "/education/wapak", summary: "The main start of my academic journey in Wapakoneta, Ohio." },
];
const OPTIONS: EmblaOptionsType = { align: "center", loop: true }
export default function Home() {
  return (
    <main className="flex-1 mt-3">
      <div className="flex flex-col w-full flex-1 min-h-0 md:min-h-[calc(100vh-4rem)]">
        <HomeIntro />
        <h1 className="py-10 md:py-0 flex-shrink-0 w-full justify-center flex mb-2">
          More about me
        </h1>
      </div>
      <HomeCarousels
        sections={[
          { id: "experience", title: "Experience", href: "/experience", slides: EXPERIENCE_SLIDES },
          { id: "projects", title: "Projects", href: "/projects", slides: PROJECT_SLIDES },
          { id: "education", title: "Education", href: "/education", slides: EDUCATION_SLIDES },
        ]}
        options={OPTIONS}
      />
    </main>
  );
}
