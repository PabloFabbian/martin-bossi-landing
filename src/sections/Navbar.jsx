import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GradientButton from '../components/GradientButton';
import Logo from '../assets/isologo_night.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Animación de entrada al montar el componente
  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;
    const button = buttonRef.current;

    if (header && logo && nav && button) {
      const tl = gsap.timeline();

      gsap.set(header, {
        y: -120,
        opacity: 0,
        scaleY: 0,
        rotationX: -90,
        transformOrigin: 'top center',
        transformPerspective: 1000,
      });

      gsap.set([logo, button], {
        y: -50,
        opacity: 0,
        scale: 0.7,
        rotationY: 45,
      });

      gsap.set(nav.children, {
        opacity: 0,
      });

      tl.to(header, {
        y: 0,
        opacity: 1,
        scaleY: 1,
        rotationX: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
      })
        .to(header, {
          boxShadow: '0 0 30px rgba(225,176,0,0.8), 0 0 60px rgba(225,176,0,0.4)',
          duration: 0.2,
          ease: 'power2.out',
        }, '-=0.8')
        .to(header, {
          boxShadow: '0 4px 15px rgba(225,176,0,0.2)',
          duration: 0.5,
          ease: 'power2.out',
        })
        .to([logo, button], {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.75)',
        }, '-=0.9')
        .to(nav.children, {
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        }, '-=0.3')
        .to(header, {
          y: -10,
          duration: 0.2,
          ease: 'power2.out',
        })
        .to(header, {
          y: 0,
          duration: 0.4,
          ease: 'bounce.out',
        });
    }
  }, []);

  // Mostrar/Ocultar navbar según scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsVisible(false); // Oculta al scrollear hacia abajo
      } else {
        setIsVisible(true); // Muestra al scrollear hacia arriba
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`
        fixed top-0 left-0 w-full flex justify-between items-center md:px-10 2xl:px-14
        rounded-b-3xl z-50
        transition-transform transition-opacity duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${isScrolled 
          ? 'bg-[#001022]/70 md:py-2 2xl:py-4 shadow-[0_4px_15px_rgba(225,176,0,0.2)]' 
          : 'bg-[#001022]/70 md:py-2.5 2xl:py-4 shadow-[0_4px_15px_rgba(225,176,0,0.2)]'
        }
      `}
    >
      <a 
        ref={logoRef}
        href="#inicio" 
        className="transition-transform duration-300 hover:scale-105"
      >
        <img 
          src={Logo} 
          alt="Logo Bossi SRL" 
          className="transition-all duration-300 ease-in-out h-16 md:h-12 2xl:h-14"
        />
      </a>

      <nav ref={navRef} className="hidden md:flex md:text-xs 2xl:text-base md:space-x-12 2xl:space-x-16">
        {[
          { href: "#inicio", text: "Nosotros", isSpecial: false },
          { href: "#servicios", text: "Servicios", isSpecial: false },
          { href: "#beneficios", text: "Cotizá tu operación", isSpecial: true },
          { href: "#contacto", text: "Contacto", isSpecial: false },
          { href: "#faqs", text: "FAQ's", isSpecial: false }
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`
              relative transition-all duration-300 ease-in-out
              ${item.isSpecial 
                ? 'text-[#FFAE2B]/80 hover:text-[#FFAE2B] font-medium' 
                : 'text-white hover:text-white/70'
              }
              hover:scale-105 hover:-translate-y-0.5
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
              before:bg-gradient-to-r before:from-[#035EBB] before:to-[#002052]
              before:transition-all before:duration-300 before:ease-in-out
              hover:before:w-full
              ${item.isSpecial ? 'before:from-[#FFAE2B] before:to-[#FFAE2B]' : ''}
            `}
          >
            {item.text}
          </a>
        ))}
      </nav>

      <GradientButton
        ref={buttonRef}
        className={`
          px-6 py-2.5 rounded-full font-semibold 
          md:text-xs 2xl:text-base
          ${isScrolled ? 'shadow-md' : ''}
        `}
      >
        Iniciar
      </GradientButton>
    </header>
  );
};

export default Header;