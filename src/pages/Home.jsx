import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import AboutUs from '../sections/AboutUs';
import ServicesPage from '../sections/ServicesPage';
import ContactSection from '../sections/ContactSection';
import FAQ from '../sections/FAQ';

const Home = () => {
    useEffect(() => {
        const scrollToSection = sessionStorage.getItem('scrollToSection');
        if (scrollToSection) {
            setTimeout(() => {
                const element = document.querySelector(scrollToSection);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                sessionStorage.removeItem('scrollToSection');
            }, 100);
        }
    }, []);

    return (
        <>
            <Hero />
            <Benefits />
            <AboutUs />
            <ServicesPage />
            <FAQ />
            <ContactSection />
        </>
    );
};

export default Home;