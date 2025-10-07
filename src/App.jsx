import React, { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './sections/Navbar';

const Home = lazy(() => import('./pages/Home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  const loadingFallback = (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Cargando...
    </div>
  );

  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Navbar />

      <Suspense fallback={loadingFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;