import { Toaster } from 'sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import AboutUs from './sections/AboutUs';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ServicesPage from './sections/ServicesPage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Navbar />
      <Hero />
      <Benefits />
      <AboutUs />
      <ServicesPage />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;