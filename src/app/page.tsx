"use client";

import Image from "next/image";
import Tile from '../components/tile/Tile';
import styles from '../components/tile/Tile.module.css';
import { useState, useEffect } from 'react';

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
    <div className="flex flex-row">
        <div>
            <Image
                className="rounded-md"
                src="/doll.jpg"
                alt="me, John Doll"
                width={600}
                height={600}
                priority
            />
        </div>
        <div id="intro-text"> 
            My name is John Doll and I graduated from Miami University with a Bachelor of Science in Computer Science in May 2023.
            I started full-time with Lutron Electronics in Boynton Beach, Florida as a Systems Infrastructure Developer in June 2023. I started my pursuit of a Master's 
            in Computer Science at the University of Illinois in Fall 2024.
        </div>
    </div>
    {/* make two rows of tiles */}
    <h1 className="text-7xl">More about me</h1>
      <div>
        <h2 className="text-6xl">Projects</h2>
        <div className={styles.tileContainer}>
          <Tile mousePos={mousePos}>Website 3.0</Tile>
          <Tile mousePos={mousePos}>Website 2.0</Tile>
          <Tile mousePos={mousePos}>Website 1.0</Tile>
          <Tile mousePos={mousePos}>COVID</Tile>
        </div>
      </div>
      <div className="">
        <h2 className="text-6xl">Experience</h2>
        <div className={styles.tileContainer}>
          <Tile mousePos={mousePos}>Lutron</Tile>
          <Tile mousePos={mousePos}>Amazon</Tile>
          <Tile mousePos={mousePos}>Amazon</Tile>
          <Tile mousePos={mousePos}>Hospitality Wifi</Tile>
        </div>
      </div>
      <div>
        <h2 className="text-6xl">Education</h2>
        <div className={styles.tileContainer}>
          <Tile mousePos={mousePos}>University of Illinois</Tile>
          <Tile mousePos={mousePos}>Miami University</Tile>
          <Tile mousePos={mousePos}>Wapakoneta High School</Tile>
        </div>
      </div>
    </main>
  );
}
