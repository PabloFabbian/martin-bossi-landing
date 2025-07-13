import { Toaster } from 'sonner';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Services from './sections/Services';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />

      <Header />
      <Hero />
      <Benefits />
      <Services />
    </>
  );
}

export default App;