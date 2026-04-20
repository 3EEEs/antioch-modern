import { useState, useEffect } from "react";

interface CarouselProps {
  images?: string[];
  autoPlayInterval?: number;
}

export default function Carousel({ images = [], autoPlayInterval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  if (!images.length) return null;

  return (
    <div className="relative w-full overflow-hidden py-10 group">
      <div 
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={url} 
                alt={`Slide ${idx}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-zinc-300'}`}
          />
        ))}
      </div>
    </div>
  );
}