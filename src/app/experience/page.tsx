import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => ({
  title: "John Doll | Experience",
  description: "John Doll’s software engineering, DevOps, infrastructure, networking, and technical support experience.",
});

const experiences = [
  {
    name: "Lutron",
    role: "Senior DevOps Engineer",
    years: "2024-Present",
    href: "/experience/lutron",
    logo: "/experience/lutron/lutron.webp",
    alt: "Lutron logo",
    invert: true,
  },
  {
    name: "Lutron",
    role: "Software Engineer",
    years: "2023-2024",
    href: "/experience/lutron",
    logo: "/experience/lutron/lutron.webp",
    alt: "Lutron logo",
    invert: true,
  },
  {
    name: "Amazon (2022)",
    role: "Software Development Engineer Intern",
    years: "2022",
    href: "/experience/amazon2022",
    logo: "/experience/amazon/amazon.webp",
    alt: "Amazon logo",
    invert: true,
  },
  {
    name: "Amazon (2021)",
    role: "Software Development Engineer Intern",
    years: "2021",
    href: "/experience/amazon2021",
    logo: "/experience/amazon/amazon.webp",
    alt: "Amazon logo",
    invert: true,
  },
  {
    name: "Hospitality Wifi",
    role: "Global Support Liaison",
    years: "2020-2021",
    href: "/experience/hw",
    logo: "/experience/hw/hw.webp",
    alt: "Hospitality Wifi logo",
    invert: false,
  },
  {
    name: "St. Mark's",
    role: "Sound and Technology Support",
    years: "2017-2020",
    href: "/experience/stmarks",
    logo: "/experience/church/church.webp",
    alt: "St. Mark's logo",
    invert: false,
  },
  {
    name: "Marathon",
    role: "IT and Engineering Explorers Program",
    years: "2016-2017",
    href: "/experience/marathon",
    logo: "/experience/marathon/marathon.webp",
    alt: "Marathon Petroleum logo",
    invert: false,
  },
];

const timelineExperiences = experiences;
const experienceCards = [
  { ...experiences[0], role: "Senior Software Engineer, Central DevOps", years: "2023-Present" },
  ...experiences.slice(2),
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-1 justify-center p-6 md:p-10">
      <main className="w-full max-w-6xl space-y-10">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1>Experience</h1>
          <p className="text-base leading-8 md:text-lg">
            I have been extraordinarily lucky to have the experiences that I do.
            Each of them has given me a unique perspective and taught me something new.
            Good or bad, all the experiences have contributed to my development as a person and a professional.
          </p>
        </header>

        <section aria-labelledby="career-timeline-heading" className="space-y-5">
          <h2 id="career-timeline-heading" className="text-center text-3xl md:text-5xl">Career timeline</h2>
          <ol className="relative ml-3 border-l-2 border-[#255230] pl-6 md:ml-8 md:pl-8">
            {timelineExperiences.map((experience) => (
              <li key={`timeline-${experience.name}-${experience.years}`} className="relative pb-7 last:pb-0">
                <span className="absolute -left-[2.05rem] top-1 h-4 w-4 rounded-full border-4 border-[#255230] bg-[var(--background)] md:-left-[2.55rem]" aria-hidden="true" />
                <Link href={experience.href} className="rounded-md focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
                  <p className="font-bold text-[#255230] dark:text-green-300">{experience.years}</p>
                  <h3 className="text-xl not-italic">{experience.name}</h3>
                  <p>{experience.role}</p>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-label="Professional and personal experiences"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {experienceCards.map((experience) => (
            <Link
              key={`${experience.name}-${experience.years}`}
              href={experience.href}
              className="group flex min-h-72 flex-col items-center justify-between rounded-xl border border-black/10 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/20"
            >
              <div className="flex h-28 w-full items-center justify-center">
                <Image
                  src={experience.logo}
                  alt={experience.alt}
                  width={700}
                  height={220}
                  className={`max-h-24 w-full object-contain transition group-hover:scale-105 ${
                    experience.invert ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl not-italic">{experience.name}</h2>
                <p className="font-semibold text-[#255230] dark:text-green-300">
                  {experience.role}
                </p>
                <p className="text-sm opacity-70">{experience.years}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}