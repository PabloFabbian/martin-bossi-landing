import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        images.map(src => {
          return new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          });
        })
      );
      setLoadedImages(loaded.filter(Boolean));
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (loadedImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % loadedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  if (loadedImages.length === 0) return null;

  return (
    <div
      ref={carouselRef}
      className="w-full lg:w-2/5 h-64 md:h-70 relative overflow-hidden mx-auto rounded-xl border border-[#023E7D]/30 bg-[#001645]/50"
    >
      {loadedImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Logística internacional"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#001233]/50">
        <div
          className="h-full bg-[#0466C8] transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentImage + 1) / loadedImages.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageCarousel;