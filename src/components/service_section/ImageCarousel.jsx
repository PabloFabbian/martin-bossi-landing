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
      className="w-full relative overflow-hidden mx-auto rounded-xl border border-[#023E7D]/30 bg-[#001645]/50 aspect-[16/9] max-w-[600px] lg:max-w-none"
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
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#001233]/40 via-[#001233]/60 to-[#001233]/40 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-[#0466C8] via-[#0353A4] to-[#023E7D] shadow-[0_0_10px_rgba(4,102,200,0.5)] relative overflow-hidden"
          style={{
            width: `${((currentImage + 1) / loadedImages.length) * 100}%`,
            transition: 'width 5000ms cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;