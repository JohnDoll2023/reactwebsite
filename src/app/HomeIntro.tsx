"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FULL_TEXT = `>My name is John Doll and I graduated from Miami University
  with a B.S. in Computer Science in May 2023. I started full-time with Lutron Electronics in 
  Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I completed my
  Master's in Computer Science at the University of Illinois in August 2026. Now, I am a 
  DevOps Engineer on the Central DevOps team.`;

export default function HomeIntro() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < FULL_TEXT.length) {
        setDisplayedText(FULL_TEXT.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full flex-1 min-h-0">
      <div className="flex flex-1 justify-center items-center md:basis-[20%] min-h-0 mx-2">
        <Image
          className="rounded-2xl w-auto h-[80vh] aspect-[2/3] object-cover"
          src="/home/profilepic.webp"
          alt="me, John Doll"
          width={2304}
          height={1536}
          priority
        />
      </div>
      <div className="flex-1 text-xl py-2 md:py-0 md:text-3xl font-bold font-mono px-2 md:basis-[60%] md:pl-6 flex items-center min-h-0">
        <p>
          <span>{displayedText}</span>
          <span className={`terminal-cursor ${isTypingComplete ? "blink" : ""}`}>
            █
          </span>
        </p>
      </div>
    </div>
  );
}
