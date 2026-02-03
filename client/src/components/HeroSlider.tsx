import { useState, useEffect } from 'react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    alt: "Модерен апартамент след ремонт"
  },
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
    alt: "Луксозна баня след ремонт"
  },
  {
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    alt: "Модерна кухня след ремонт"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    alt: "Интериорни довършителни работи"
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop",
    alt: "Модерен жилищен екстериор"
  }
];

interface HeroSliderProps {
  interval?: number;
}

export function HeroSlider({ interval = 6000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(heroImages.length).fill(false));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    heroImages.forEach((image, index) => {
      if (index === 0) return;
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        setIsLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Consistent dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40" />
    </div>
  );
}

export { heroImages };
