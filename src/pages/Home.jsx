import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import DiagonalSeparator from '../components/DiagonalSeparator';

const AboutUs = lazy(() => import('../sections/AboutUs'));
const ServicesPage = lazy(() => import('../sections/ServicesPage'));
const FAQ = lazy(() => import('../sections/FAQ'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

const LoadingFallback = () => (
    <div style={{ padding: '50px 0', textAlign: 'center' }}>
        Cargando Contenido...
    </div>
);

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
            <Suspense fallback={<LoadingFallback />}>
                <AboutUs />
                <ServicesPage />
                <FAQ />
                <ContactSection />
            </Suspense>
            <DiagonalSeparator className="rotate-180" />
        </>
    );
};

export default Home;