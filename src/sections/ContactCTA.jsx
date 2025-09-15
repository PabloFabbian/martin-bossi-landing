import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";
import GradientButton from "../components/GradientButton";

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = contentRef.current.querySelector('.cta-title');
      const subtitle = contentRef.current.querySelector('.cta-subtitle');
      const description = contentRef.current.querySelector('.cta-description');
      const button = contentRef.current.querySelector('.cta-button');
      const note = contentRef.current.querySelector('.cta-note');
      const divider = contentRef.current.querySelector('.cta-divider');

      gsap.fromTo(
        [title, subtitle, description],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        [button, note],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      if (divider) {
        gsap.fromTo(
          divider,
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: divider,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleForm = useCallback(() => {
    setShowForm(prev => !prev);
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
  }, []);

  return (
    <section className="md:scroll-mt-[6.5rem] 2xl:scroll-mt-40" id="cotizacion">
      <div className="relative">
        <svg
          className="absolute -top-1 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#001d3d"
            d="M0,224L1440,128L1440,320L0,320Z"
          ></path>
        </svg>

        <div
          ref={sectionRef}
          className="2xl:bg-gradient-to-b 2xl:from-[#001d3d] 2xl:via-[#001d3d] 2xl:to-[#001d3d] md:bg-gradient-to-b md:from-[#050f24] md:via-[#001d3d] md:to-[#001d3d] text-white text-center py-12 px-6 md:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <div ref={contentRef}>
              <p className="cta-title text-white text-xs uppercase tracking-wide mb-6">
                Cotización
              </p>

              <h1 className="cta-subtitle text-white text-4xl md:text-4xl 2xl:text-5xl font-semibold leading-tight mb-6">
                ¡Contáctanos <span className="text-[#0466C8]">hoy!</span>
              </h1>

              <p className="cta-description text-white/80 text-lg mb-8">
                Tu solución logística
              </p>

              <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed">
                Y obtené una cotización personalizada para tu próxima operación
              </p>

              <div className="space-y-6">
                <GradientButton
                  onClick={toggleForm}
                  className="cta-button px-10 py-5 text-lg font-medium hover:scale-105 transition-transform duration-200"
                  aria-expanded={showForm}
                  aria-controls="contact-form-modal"
                >
                  Solicitar Cotización
                </GradientButton>

                <p className="cta-note text-sm text-white/50">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>

            <div className="cta-divider mt-16 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#0466C8]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm isOpen={showForm} onClose={closeForm} />
    </section>
  );
};

export default ContactCTA;