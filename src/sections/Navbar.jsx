import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GradientButton from '../components/GradientButton';
import Logo from '../assets/isologo.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const bottomNavRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;
    const button = buttonRef.current;
    const bottomNav = bottomNavRef.current;

    if (header && logo) {
      const tl = gsap.timeline();

      if (window.innerWidth >= 768) {
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

        if (nav) {
          gsap.set(nav.children, {
            opacity: 0,
          });
        }

        tl.to(header, {
          y: 0,
          opacity: 1,
          scaleY: 1,
          rotationX: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
        })
          .to(
            header,
            {
              boxShadow:
                '0 0 30px rgba(225,176,0,0.8), 0 0 60px rgba(225,176,0,0.4)',
              duration: 0.2,
              ease: 'power2.out',
            },
            '-=0.8'
          )
          .to(header, {
            boxShadow: '0 4px 15px rgba(225,176,0,0.2)',
            duration: 0.5,
            ease: 'power2.out',
          })
          .to(
            logo,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              ease: 'elastic.out(1, 0.75)',
            },
            '-=0.9'
          );

        if (button) {
          tl.to(
            button,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.9,
              ease: 'elastic.out(1, 0.75)',
              boxShadow: '0 0 15px rgba(255,174,43,0.6)',
              onComplete: () => {
                gsap.to(button, {
                  boxShadow: '0 0 0 rgba(255,174,43,0)',
                  duration: 0.8,
                  ease: 'power2.out'
                });
              }
            },
            '-=0.9'
          );
        }

        if (nav) {
          tl.to(
            nav.children,
            {
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }

        tl.to(header, {
          y: -10,
          duration: 0.2,
          ease: 'power2.out',
        })
          .to(header, {
            y: 0,
            duration: 0.4,
            ease: 'bounce.out',
          });
      } else {
        gsap.set(header, {
          y: -100,
          opacity: 0,
        });

        gsap.set(logo, {
          scale: 0,
          opacity: 0,
        });

        if (bottomNav) {
          gsap.set(bottomNav, {
            y: 100,
            opacity: 0,
          });
        }

        tl.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        })
          .to(
            logo,
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'elastic.out(1, 0.75)',
            },
            '-=0.4'
          );

        if (bottomNav) {
          tl.to(
            bottomNav,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            },
            '-=0.6'
          );
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['nosotros', 'servicios', 'cotizacion', 'faq', 'contacto'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', sectionId);
      navigate('/');
      return;
    }

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreClick = () => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', '#servicios');
      navigate('/');
    } else {
      const element = document.querySelector('#servicios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navigationItems = [
    {
      href: '#nosotros',
      text: 'Nosotros',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      isSpecial: false
    },
    {
      href: '#servicios',
      text: 'Servicios',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      isSpecial: false
    },
    {
      href: '#cotizacion',
      text: 'Cotizá tu operación',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      isSpecial: true
    },
    {
      href: '#faq',
      text: "FAQ's",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <point cx="12" cy="17" />
        </svg>
      ),
      isSpecial: false
    },
    {
      href: '#contacto',
      text: 'Contacto',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      isSpecial: false
    },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 w-full md:flex justify-between items-center px-4 md:px-10 2xl:px-14 bg-[#001022]/70
          rounded-b-3xl z-50 hidden
          transition-transform transition-opacity duration-500 ease-in-out
          ${isScrolled
            ? 'md:py-2 2xl:py-4 shadow-[0_4px_15px_rgba(225,176,0,0.2)] backdrop-blur-[3px]'
            : 'md:py-2 2xl:py-4 shadow-[0_4px_15px_rgba(225,176,0,0.2)]'
          }
        `}
      >
        <Link
          ref={logoRef}
          to="/"
          onClick={(e) => {
            sessionStorage.removeItem('scrollToSection');

            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="transition-transform duration-300 hover:scale-105 select-none"
        >
          <img
            src={Logo}
            alt="Logo Bossi SRL"
            className="transition-all duration-300 ease-in-out h-16 md:h-12 2xl:h-14"
          />
        </Link>

        <nav
          ref={navRef}
          className="flex md:text-xs 2xl:text-base md:space-x-12 2xl:space-x-16"
        >
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => scrollToSection(item.href, e)}
              className={`
                relative transition-all duration-300 ease-in-out pb-1 cursor-pointer
                ${item.isSpecial
                  ? 'text-[#FFAE2B]/80 hover:text-[#FFAE2B] font-medium'
                  : 'text-white hover:text-white/70'
                }
                hover:scale-105 hover:-translate-y-0.5
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                before:bg-gradient-to-r before:from-[#035EBB] before:to-[#002052]
                before:transition-all before:duration-300 before:ease-in-out
                hover:before:w-full
                ${item.isSpecial ? 'before:from-[#FFAE2B] before:to-[#FFAE2B]' : ''
                }
              `}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <GradientButton
          ref={buttonRef}
          variant="navbar"
          onClick={handleExploreClick}
          className={`${isScrolled ? 'shadow-md' : ''} md:ml-8 2xl:ml-14 cursor-pointer`}
        >
          Explorar
        </GradientButton>
      </header>

      <nav
        ref={bottomNavRef}
        className="md:hidden fixed bottom-4 left-4 right-4 
        bg-gradient-to-br from-[#001022]/85 to-[#000a1a]/90 
        backdrop-blur-lg rounded-2xl border border-[rgba(4,102,200,0.4)] 
        z-50 shadow-[0_10px_30px_rgba(4,102,200,0.2)]
        touch-manipulation"
      >
        <div className="flex justify-between items-center py-4 px-4">

          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(item.href, e)}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                className="flex flex-col items-center justify-center py-2 px-3 flex-1 text-center 
          transition-all duration-300 group rounded-xl hover:bg-white/5 touch-manipulation"
              >
                <div
                  className={`transition-all duration-300 
            ${isActive
                      ? 'text-[#0466C8] drop-shadow-[0_0_8px_rgba(4,102,200,0.6)]'
                      : item.isSpecial
                        ? 'text-[#FFAE2B]/80 group-active:text-[#FFAE2B]'
                        : 'text-white/70 group-active:text-white'
                    }`}
                >
                  {item.icon}
                </div>

                <span
                  className={`text-xs font-medium transition-all duration-300 
            max-[425px]:hidden
            ${isActive
                      ? 'text-[#0466C8] font-semibold'
                      : item.isSpecial
                        ? 'text-[#FFAE2B]/80 group-active:text-[#FFAE2B]'
                        : 'text-white/70 group-active:text-white'
                    }`}
                >
                  {item.text}
                </span>
              </a>
            );
          })}

        </div>
      </nav>

    </>
  );
};

export default Header;