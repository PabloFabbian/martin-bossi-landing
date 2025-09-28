import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageCarousel from '../components/service_section/ImageCarousel';
import ServiceFeatures from '../components/service_section/ServiceFeatures';
import GradientButton from '../components/GradientButton';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const features = [
    {
      title: 'Importación Integral',
      description: 'Maquinaria, repuestos, insumos'
    },
    {
      title: 'Seguimiento Profesional',
      description: 'Monitoreo completo del proceso'
    },
    {
      title: 'Proceso Eficiente',
      description: 'Optimización de tiempos y costos'
    },
    {
      title: 'Alcance Global',
      description: 'Conexiones internacionales'
    },
  ];

  const images = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1608889825103-eb5a6f5adf58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    'https://images.unsplash.com/photo-1600271886742-f049cd5b8a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0b0c1c] sm:from-[#00000a] via-[#012141] sm:via-[#012141] to-[#050f24] sm:to-[#050f24] 
        py-12 sm:py-16 md:py-20 lg:py-24 
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32
        scroll-mt-8 sm:scroll-mt-12 md:scroll-mt-16 lg:scroll-mt-20 2xl:scroll-mt-36"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center"
        >
          <p className="text-[#0466C8] text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 font-medium">
            Servicios
          </p>

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            font-semibold leading-tight mb-4 sm:mb-5 md:mb-6 px-2">
            Soluciones de importación{' '}
            <span className="text-[#0466C8] block sm:inline">integrales</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl 
            max-w-2xl mx-auto px-4 leading-relaxed">
            Especialistas en gestión aduanera y comercio internacional
          </p>
        </div>

        <div
          ref={contentRef}
          className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center lg:items-start"
        >
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex-shrink-0">
            <ImageCarousel images={images} />
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6 sm:space-y-8 flex-shrink-0">
            <ServiceFeatures features={features} />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
              <GradientButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                text-sm sm:text-base font-medium hover:scale-105 transition-transform duration-300">
                Solicitá tu cotización
              </GradientButton>

              <button className="w-full sm:w-auto text-[#979DAC] hover:text-white 
                px-5 sm:px-6 py-3 sm:py-4 rounded-full 
                border border-[#0353A4] hover:border-[#00A6D6] 
                text-sm sm:text-base font-medium 
                transition-all duration-300 ease-in-out
                hover:bg-gradient-to-r hover:from-[#0353A4]/10 hover:to-[#00A6D6]/10
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0466C8] focus:ring-offset-2
                active:scale-95">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;