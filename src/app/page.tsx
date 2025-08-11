"use client";

import Image from "next/image";
import EmblaCarousel from '../components/embla-carousel/EmblaCarousel';
import "../components/embla-carousel/embla.css";
import { EmblaOptionsType } from 'embla-carousel';
import { useState, useEffect } from 'react';
import Link from "next/link";

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = ">My name is John Doll and I graduated from Miami University with a B.S. in Computer Science in May 2023. I started full-time with Lutron Electronics in Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I started my pursuit of a Master's in Computer Science at the University of Illinois in Fall 2024";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 40); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
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
          <div className="flex-1 text-xl py-2 md:py-0 md:text-3xl font-bold font-mono px-2 md:basis-[60%] md:pl-6 flex items-center min-h-0">
            <p>
              <span>{displayedText}</span>
              <span className={`terminal-cursor ${isTypingComplete ? 'blink' : ''}`}>
                █
              </span>
            </p>
          </div>
        </div>
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
