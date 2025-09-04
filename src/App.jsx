import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;