"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
type SlideType = {
  label: string;
  link: string;
  summary: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
  isActive?: boolean;
  onActivate?: () => void;
};

const EmblaSlide: React.FC<{
  slide: SlideType;
  isFlipped: boolean;
  onFlip: () => void;
}> = ({ slide, isFlipped, onFlip }) => {
  return (
    <div className={`embla__slide__card ${isFlipped ? "embla__slide__card--flipped" : ""}`}>
      <button
        type="button"
        className="embla__slide__face embla__slide__front"
        aria-expanded={isFlipped}
        onClick={onFlip}
      >
        <span>{slide.label}</span>
      </button>
      <div className="embla__slide__face embla__slide__back">
        <p>{slide.summary}</p>
        <Link
          href={slide.link}
          className="embla__slide__link"
          aria-label={`Open ${slide.label} page`}
        >
          <span>View page</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isActive = false, onActivate } = props;
  
  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Disable auto-scroll only if 3 or fewer slides AND on desktop
  const shouldAutoScroll = slides.length > 3 || isMobile;
  const [flippedSlideIndex, setFlippedSlideIndex] = useState<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options,
    shouldAutoScroll ? [AutoScroll({ playOnInit: true, stopOnInteraction: true })] : []
  );

  useEffect(() => {
    if (!isActive) {
      setFlippedSlideIndex(null);
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
        resumeTimer.current = null;
      }
      emblaApi?.plugins().autoScroll?.play();
    }
  }, [emblaApi, isActive]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${!shouldAutoScroll ? 'embla__container--centered' : ''}`}>
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <EmblaSlide
                slide={slide}
                isFlipped={flippedSlideIndex === index}
                onFlip={() => {
                  onActivate?.();
                  const autoScroll = emblaApi?.plugins().autoScroll;
                  if (autoScroll) {
                    autoScroll.stop();
                    if (resumeTimer.current) {
                      clearTimeout(resumeTimer.current);
                    }
                    resumeTimer.current = setTimeout(() => {
                      autoScroll.play();
                    }, 5000);
                  }
                  emblaApi?.scrollTo(index);
                  setFlippedSlideIndex(index);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
