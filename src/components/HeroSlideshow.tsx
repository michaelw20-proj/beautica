import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "produk/Slideshow/Home1.webp" },
    { id: 2, image: "produk/Slideshow/Home2.webp" },
    { id: 3, image: "produk/Slideshow/Home3.webp" },
    { id: 4, image: "produk/Slideshow/Home4.webp" },
    { id: 5, image: "produk/Slideshow/Home5.webp" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full aspect-[16/6] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 z-20 scale-100'
              : 'opacity-0 z-10 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft
          size={28}
          className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 group"
        aria-label="Next Slide"
      >
        <ChevronRight
          size={28}
          className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-4 h-4 bg-white scale-110'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
