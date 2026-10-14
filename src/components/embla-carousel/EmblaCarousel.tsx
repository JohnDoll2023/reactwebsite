import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
type SlideType = {
  label: string;
  link: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  
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
  
  const [emblaRef] = useEmblaCarousel(options,
    shouldAutoScroll ? [AutoScroll({ playOnInit: true })] : []
  );
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${!shouldAutoScroll ? 'embla__container--centered' : ''}`}>
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Link href={slide.link} className="embla__slide__link">
                <div className="embla__slide__number">
                  <span>{slide.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
