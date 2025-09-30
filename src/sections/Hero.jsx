import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Port from '../assets/port.webp';
import IsolgoNight from '../assets/logo.webp';
import GradientButton from '../components/GradientButton';

const Hero = () => {
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const logoRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav, header, [class*="navbar"], [class*="Navbar"]');
    setNavbarHeight(navbar?.offsetHeight || 80);
  }, []);

  useEffect(() => {
    const img = new Image();
    const logoImg = new Image();
    img.src = Port;
    logoImg.src = IsolgoNight;

    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: 'power3.out',
          }
        );
      }

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
          delay: 1.8,
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
            delay: 2.3,
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
      className="relative h-screen bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${Port})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#001331]/40 to-black/50" />
      <div
        className="relative z-10 container mx-auto px-6 md:px-28 2xl:px-32 h-full flex flex-col justify-start md:justify-center pt-8 pb-24 md:pb-0"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div
          ref={logoRef}
          className="block sm:hidden mb-6 text-center mt-4"
        >
          <img
            src={IsolgoNight}
            alt="Logo de la empresa"
            className="h-24 mx-auto drop-shadow-[0_16px_16px_rgba(0,29,61,0.9)]"
            loading="eager"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full text-center lg:text-left">
          <div className="flex-1 mb-4 md:mb-0">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-normal text-white leading-tight"
            >
              Tu importación, <br className="hidden md:block" />
              <span className="text-white">en manos expertas.</span>
            </h1>
          </div>

          <div className="flex-1 max-w-lg mt-2 lg:mt-0">
            <div className="space-y-4 md:space-y-6">
              <p
                ref={paragraph1Ref}
                className="text-sm sm:text-base md:text-base 2xl:text-xl text-gray-200 leading-relaxed"
              >
                En Martin Bossi SRL acompañamos a empresas,
                pymes y emprendedores con seriedad, compromiso y
                visión de futuro.
              </p>

              <p
                ref={paragraph2Ref}
                className="text-sm sm:text-base md:text-base 2xl:text-xl text-gray-200 leading-relaxed"
              >
                Hacemos de cada operación un proceso seguro, ágil y rentable desde el inicio hasta la entrega final.
              </p>

              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center pt-2 md:pt-4 gap-3 md:gap-4"
              >
                <GradientButton
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold"
                  onClick={() => {
                    document.getElementById('cotizacion')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Solicitá tu cotización
                </GradientButton>

                <button
                  className="w-full sm:w-auto border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out font-semibold text-xs select-none cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.025] tracking-wide"
                  onClick={() => {
                    document.getElementById('benefits')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Quiero más info.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={Port} alt="" className="hidden" loading="eager" />
    </section>
  );
};

export default Hero;