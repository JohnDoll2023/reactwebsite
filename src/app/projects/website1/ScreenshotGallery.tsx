"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
  title: string;
};

type ScreenshotGalleryProps = {
  screenshots: Screenshot[];
};

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const activeShot = activeIndex === null ? null : screenshots[activeIndex];

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 p-3">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-contain p-3 transition duration-300 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-semibold text-slate-900">
                {index + 1}. {shot.title}
              </span>
              <span className="text-slate-500">Click to enlarge</span>
            </div>
          </button>
        ))}
      </div>

      {activeShot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="w-full max-w-[96vw] rounded-3xl border border-white/20 bg-slate-950 p-3 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white sm:text-base">
                {activeIndex + 1}. {activeShot.title}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <div className="relative h-[80vh] max-h-[86vh] w-full rounded-2xl bg-slate-900">
              <Image
                src={activeShot.src}
                alt={activeShot.alt}
                fill
                className="object-contain p-2 sm:p-4"
                sizes="96vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
