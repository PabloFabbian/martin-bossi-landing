import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Port from '../assets/port.webp';
import GradientButton from '../components/GradientButton';

const Hero = () => {
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = Port;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 3,
            ease: 'power3.out',
          }
        );
      }

      gsap.fromTo(
        [paragraph1Ref.current, paragraph2Ref.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 2.3,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 2.8,
            duration: 0.8,
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
      className="relative h-lvh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Port})` }}
    >
      <img src={Port} alt="" className="hidden" loading="eager" />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto md:px-28 2xl:px-32 h-full">
        <div className="flex flex-col lg:flex-row items-start justify-between h-full md:py-[15rem] 2xl:py-[21rem]">
          <div className="flex-1">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl 2xl:text-6xl font-normal text-white leading-tight"
            >
              Tu importación,<br />
              <span className="text-white">en manos expertas.</span>
            </h1>
          </div>

          <div className="flex-1 max-w-lg">
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
                className="flex justify-start items-center pt-4 gap-4"
              >
                <GradientButton className="px-6 py-3 text-xs font-semibold">
                  Solicitá tu cotización
                </GradientButton>
                <button className="scale-90 border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 ease-in-out font-semibold text-xs select-none cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.025] focus:outline-none focus:ring-2 focus:ring-[#FFAE2B] focus:ring-offset-2 tracking-wide">
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