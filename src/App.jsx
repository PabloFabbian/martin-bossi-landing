import { Toaster } from 'sonner';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Connections from './sections/Connections';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';
import ContactForm from './sections/ContactForm';
import ServicesPage from './sections/ServicesPage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Header />
      <Hero />
      <Benefits />
      <Connections />
      <ServicesPage />
      <ContactCTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;