import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StepItem = ({ step, title, description, showLine = true, index = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -50,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="relative pl-10">
      {showLine && <div className="absolute top-0 left-3 w-px h-full bg-white/30"></div>}

      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white text-[#0D1224] flex items-center justify-center text-sm font-bold shadow-md">
        {step}
      </div>

      <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-[#0D1224] to-[#0D1224]/50 hover:scale-[1.025] transition-transform duration-300">
        <h3 className="text-white font-semibold text-lg leading-snug mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default StepItem;