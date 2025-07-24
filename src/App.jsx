import { Toaster } from 'sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import VerticalStepper from './sections/VerticalStepper';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';
import ContactForm from './sections/ContactForm';
import ServicesPage from './sections/ServicesPage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Navbar />
      <Hero />
      <Benefits />
      <VerticalStepper />
      <ServicesPage />
      <ContactCTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;