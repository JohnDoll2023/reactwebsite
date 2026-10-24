"use client";

import Link from "next/link";
import { useState } from "react";
import EmblaCarousel from "../components/embla-carousel/EmblaCarousel";

type Slide = {
  label: string;
  link: string;
  summary: string;
};

type Section = {
  id: string;
  title: string;
  href: string;
  slides: Slide[];
};

export default function HomeCarousels({
  sections,
  options,
}: {
  sections: Section[];
  options: Parameters<typeof EmblaCarousel>[0]["options"];
}) {
  const [activeCarousel, setActiveCarousel] = useState<string | null>(null);

  return (
    <div>
      {sections.map((section, index) => (
        <section key={section.id}>
          <h2 className={index === 0 ? "pb-2 pl-2" : "pt-12 pb-2 pl-2"}>
            <Link href={section.href}>{section.title}</Link>
          </h2>
          <EmblaCarousel
            slides={section.slides}
            options={options}
            isActive={activeCarousel === section.id}
            onActivate={() => setActiveCarousel(section.id)}
          />
        </section>
      ))}
      <br />
    </div>
  );
}
