"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectsOverview.module.css";

const projects = [
  {
    href: "/projects/website3",
    title: "Website 3.0",
    description:
      "My current personal website, built with React, Next.js, Tailwind CSS, and TypeScript.",
    image: "/projects/website3/website.webp",
    alt: "Website 3.0 desktop screenshot",
  },
  {
    href: "/projects/website2",
    title: "Website 2.0",
    description:
      "My second personal public-facing website, and the latest to be deprecated.",
    image: "/projects/website2/website.webp",
    alt: "Website 2.0 screenshot",
  },
  {
    href: "/projects/website1",
    title: "Website 1.0",
    description:
      "My first public-facing website, built during my first year of college.",
    image: "/projects/website1/indexbig.webp",
    alt: "Website 1.0 home page screenshot",
  },
  {
    href: "/projects/covid",
    title: "COVID-19 Dynamic Dashboard",
    description:
      "I was the co-project leader, major developer, and unit tester on this health services web application.",
    image: "/projects/covid/covid.webp",
    alt: "COVID-19 dashboard screenshot",
  },
  {
    href: "/projects/checkers",
    title: "Checkers",
    description:
      "I developed a fully functional checkers game during my first year at Miami.",
    image: "/projects/checkers/checkers.webp",
    alt: "Checkers game screenshot",
  },
  {
    href: "/projects/dailytennis",
    title: "The Daily Tennis App",
    description: "Release date TBD.",
    image: "/projects/dailytennis/dailytennis.webp",
    alt: "Daily Tennis App placeholder screenshot",
  },
];

export default function ProjectsOverview() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    () => new Set(),
  );
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleProjects(new Set(projects.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number((entry.target as HTMLElement).dataset.index));

        if (newlyVisible.length > 0) {
          setVisibleProjects((current) => {
            const next = new Set(current);
            newlyVisible.forEach((index) => next.add(index));
            return next;
          });
          newlyVisible.forEach((index) => observer.unobserve(projectRefs.current[index]!));
        }
      },
      { threshold: 0.15 },
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-1 bg-[#171717] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
        <header className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur md:p-10">
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Projects
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Explore projects I have built while learning software development,
            web development, and data visualization.
          </p>
        </header>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.href}
              href={project.href}
              ref={(element) => {
                projectRefs.current[index] = element;
              }}
              data-index={index}
              className={`${styles.project} ${visibleProjects.has(index) ? styles.visible : ""} group grid items-center gap-6 rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-2 md:p-7`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 ${
                  index % 2 === 1 ? "md:order-last" : "md:order-first"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain p-3 transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-first md:text-right" : "md:order-last"}>
                <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
