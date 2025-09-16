import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Port from '../assets/port.webp';
import GradientButton from '../components/GradientButton';

const Hero = () => {
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav, header, [class*="navbar"], [class*="Navbar"]');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    } else {
      setNavbarHeight(80);
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = Port;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.5,
            ease: 'power3.out',
          }
        );
      }

      gsap.fromTo(
        [paragraph1Ref.current, paragraph2Ref.current],
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 1.3,
            duration: 0.6,
            ease: 'power2.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Port})` }}
    >
      <img src={Port} alt="" className="hidden" loading="eager" />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="relative z-10 container mx-auto px-6 md:px-28 2xl:px-32 h-full flex items-center md:items-center lg:items-center"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full text-center lg:text-left">
          <div className="flex-1">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl 2xl:text-6xl font-normal text-white leading-tight mb-4 md:mb-0"
            >
              Tu importación, <br className="hidden md:block" />
              <span className="text-white">en manos expertas.</span>
            </h1>
          </div>

          <div className="flex-1 max-w-lg mt-8 lg:mt-0">
            <div className="space-y-6">
              <p
                ref={paragraph1Ref}
                className="md:text-base 2xl:text-xl text-gray-200 leading-relaxed"
              >
                Asistimos a empresas, pymes y emprendedores con experiencia, tecnología y
                un enfoque sin complicaciones.
              </p>
              <p
                ref={paragraph2Ref}
                className="md:text-base 2xl:text-xl text-gray-200 leading-relaxed"
              >
                Nuestro trato cercano y personalizado asegura un proceso claro, seguro
                y eficiente.
              </p>

              <div
                ref={buttonsRef}
                className="flex flex-col md:flex-row justify-center lg:justify-start items-center md:items-center pt-4 gap-4"
              >
                <GradientButton className="w-full md:w-auto px-6 py-3 text-xs font-semibold">
                  Solicitá tu cotización
                </GradientButton>
                <button className="w-full md:w-auto border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out font-semibold text-xs select-none cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.025] focus:outline-none focus:ring-2 focus:ring-[#FFAE2B] focus:ring-offset-2 tracking-wide">
                  Quiero más info.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;