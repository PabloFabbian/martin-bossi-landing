import { Toaster } from 'sonner';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Services from './sections/Services';
import Connections from './sections/Connections';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Header />
      <Hero />
      <Benefits />
      <Connections />
      <Services />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default App;