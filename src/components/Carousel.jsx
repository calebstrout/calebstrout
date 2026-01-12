import React, { useState, useEffect } from 'react';

const Carousel = ({
  images = [],
  altPrefix = '',
  autoPlay = false,
  autoPlayInterval = 5000,
  transitionDuration = 1000,
}) => {
  const [index, setIndex] = useState(0);
  const len = images.length;

  useEffect(() => {
    if (!autoPlay || len <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % len),
      autoPlayInterval
    );
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, len]);

  // pause on hover
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || len <= 1) return;
    if (isHovered) return undefined;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % len),
      autoPlayInterval
    );
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, len, isHovered]);

  if (len === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-md h-40 md:h-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((item, i) => {
          const src = typeof item === 'string' ? item : item.src;
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center transition-opacity ease-in-out pointer-events-none ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ transitionDuration: `${transitionDuration}ms` }}
            >
              <img
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                className="max-w-full max-h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          );
        })}

        {len > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-30 pointer-events-auto"
            >
              ‹
            </button>

            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-30 pointer-events-auto"
            >
              ›
            </button>

            <div className="absolute left-0 right-0 bottom-2 flex justify-center gap-2 z-30 pointer-events-auto">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div
        className="mt-3 text-center text-sm text-gray-400"
        style={{
          minHeight: '1.25rem',
          transition: `opacity ${transitionDuration}ms`,
        }}
      >
        {(() => {
          const item = images[index];
          const caption = typeof item === 'string' ? null : item.caption;
          return caption ? <div>{caption}</div> : null;
        })()}
      </div>
    </div>
  );
};

export default Carousel;
