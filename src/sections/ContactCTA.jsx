import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import ContactForm from "./ContactForm";
import GradientButton from "../components/GradientButton";

const ContactCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.from(h1Ref.current, {
              y: 50,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
            });
            gsap.from(h2Ref.current, {
              y: 50,
              opacity: 0,
              duration: 0.6,
              delay: 0.2,
              ease: "power2.out",
            });
            gsap.from(pRef.current, {
              y: 40,
              opacity: 0,
              duration: 0.6,
              delay: 0.4,
              ease: "power2.out",
            });
            gsap.from(btnRef.current, {
              y: 30,
              opacity: 0,
              duration: 0.6,
              delay: 0.6,
              ease: "power2.out",
            });
          }, sectionRef);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleForm = useCallback(() => {
    setShowForm(prev => !prev);
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
  }, []);

  return (
    <section className="scroll-mt-[6.5rem]" id="cotizacion">
      <div
        ref={sectionRef}
        className="relative text-white text-center pt-24 px-6 overflow-hidden"
      >
        <div>
          <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C44.7715 0 0 44.7715 0 100C0 155.229 44.7715 200 100 200C155.229 200 200 155.229 200 100C200 44.7715 155.229 0 100 0Z" fill="url(#paint0_radial_101_23)" fillOpacity="0.2"/>
              <defs>
                <radialGradient id="paint0_radial_101_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
                  <stop stopColor="#4F46E5"/>
                  <stop offset="1" stopColor="#4F46E5" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            <h1 ref={h1Ref} className="text-4xl md:text-[2.75rem] 2xl:text-5xl font-medium mb-6">
              ¡Contáctanos hoy!
            </h1>
            <h2 ref={h2Ref} className="text-3xl md:text-[2.8rem] 2xl:text-5xl font-medium mb-6">
              Tu solución logística
            </h2>
            <p ref={pRef} className="text-base md:text-base 2xl:text-lg max-w-xl mx-auto mb-10">
              Descubre cómo podemos facilitar tus operaciones de comercio exterior y optimizar tu logística internacional.
            </p>
            <div ref={btnRef}>
              <GradientButton
                onClick={toggleForm}
                className="px-8 py-3 text-base font-medium"
                aria-expanded={showForm}
                aria-controls="contact-form-modal"
              >
                Consultanos
              </GradientButton>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
            <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="100" height="100" rx="20" transform="rotate(45 100 100)" fill="url(#paint0_linear_101_25)" fillOpacity="0.2"/>
              <defs>
                <linearGradient id="paint0_linear_101_25" x1="100" y1="50" x2="100" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5"/>
                  <stop offset="1" stopColor="#4F46E5" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <ContactForm isOpen={showForm} onClose={closeForm} />
    </section>
  );
};

export default ContactCTA;