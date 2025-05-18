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
      <div className="flex flex-col w-full flex-1 min-h-0 md:min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col md:flex-row w-full flex-1 min-h-0">
          <div className="flex flex-1 justify-center items-center md:basis-[20%] min-h-0 mx-2">
            <Image
              className="rounded-2xl w-auto h-[80vh] object-cover" 
              src="/doll.jpg"
              alt="me, John Doll"
              width={4000}
              height={6000}
              priority
            />
          </div>
          <div className="flex-1 text-3xl font-bold font-mono px-2 md:basis-[60%] md:pl-6 flex items-center min-h-0">
            My name is John Doll and I graduated from Miami University with a B.S. in Computer Science in May 2023.
            I started full-time with Lutron Electronics in Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I started my pursuit of a Master's 
            in Computer Science at the University of Illinois in Fall 2024.
          </div>
        </div>
        <h1 className="text-7xl flex-shrink-0 w-full justify-center flex mb-2">
          More about me
        </h1>
      </div>
      <div>
        <h2 className="text-5xl">Experience</h2>
        <EmblaCarousel slides={EXPERIENCE_SLIDES} options={OPTIONS} />
        <h2 className="text-5xl">Projects</h2>
        <EmblaCarousel slides={PROJECT_SLIDES} options={OPTIONS} />
        <h2 className="text-5xl">Education</h2>
        <EmblaCarousel slides={EDUCATION_SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}
