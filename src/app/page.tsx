"use client";

import Image from "next/image";
import EmblaCarousel from '../components/embla-carousel/EmblaCarousel';
import "../components/embla-carousel/embla.css";
import { EmblaOptionsType } from 'embla-carousel';
import { useState, useEffect } from 'react';

const PROJECT_SLIDES = [
  "Website 3.0",
  "Website 2.0",
  "Website 1.0",
  "COVID",
  "Checkers"
];

const EXPERIENCE_SLIDES = [
  "Lutron",
  "Amazon (2022)",
  "Amazon (2021)",
  "Hospitality Wifi",
  "St. Mark's",
  "Marathon"
];

const EDUCATION_SLIDES = [
  "University of Illinois",
  "Miami University",
  "Wapakoneta High School"
];
const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex-1 mt-3">
      <div className="flex flex-row w-full">
        <div className="basis-[30%] flex-shrink-0 px-1">
          <Image
            className="rounded-md"
            src="/doll.jpg"
            alt="me, John Doll"
            width={600}
            height={600}
            priority
          />
        </div>
        <div id="intro-text" className="text-3xl basis-[70%] px-2 font-bold font-mono">
          My name is John Doll and I graduated from Miami University with a B.S. in Computer Science in May 2023.
          I started full-time with Lutron Electronics in Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I started my pursuit of a Master's 
          in Computer Science at the University of Illinois in Fall 2024.
        </div>
      </div>
      {/* make two rows of tiles */}
      <h1 className="text-7xl">More about me</h1>
      <div>
        <EmblaCarousel slides={EXPERIENCE_SLIDES} options={OPTIONS} />
        <EmblaCarousel slides={PROJECT_SLIDES} options={OPTIONS} />
        <EmblaCarousel slides={EDUCATION_SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}
