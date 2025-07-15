import React, { useState, useEffect } from 'react';
import GradientButton from '../components/GradientButton';
import Logo from '../assets/isologo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full flex justify-between items-center px-8 shadow-md rounded-b-3xl z-50 
        transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-white/80 backdrop-blur py-1.5 md:py-1.5 2xl:py-4'
        }
      `}
    >
      <div className="transition-transform duration-300 hover:scale-105">
        <img 
          src={Logo} 
          alt="Logo Bossi SRL" 
          className={`
            transition-all duration-300 ease-in-out h-16 md:h-12 2xl:h-14
          `}
        />
      </div>
      
      <nav className="hidden md:flex md:text-xs 2xl:text-base md:space-x-6 2xl:space-x-12">
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
                : 'text-gray-700 hover:text-black'
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
        className={`
          px-4 py-2 rounded-full font-semibold 
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