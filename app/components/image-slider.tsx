"use client";

import { useState } from "react";

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-[220px] h-[420px] flex items-center justify-center">
      <img
        src={images[current]}
        alt="Mobile App Screenshot"
        className="object-contain h-[420px] w-[220px] rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-900/80 rounded-full p-1 shadow hover:bg-white dark:hover:bg-neutral-800"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-900/80 rounded-full p-1 shadow hover:bg-white dark:hover:bg-neutral-800"
            aria-label="Next"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-2 h-2 rounded-full ${
                  idx === current
                    ? "bg-purple-600"
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSlider;