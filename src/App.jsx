import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './sections/Navbar.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

const ToasterLazy = lazy(() =>
  import('sonner').then(module => ({ default: module.Toaster }))
);

function App() {
  const routeFallback = (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      Cargando contenido...
    </div>
  );

  return (
    <Router>
      <Suspense fallback={null}>
        <ToasterLazy position="top-right" richColors />
      </Suspense>

      <Navbar />

      <Suspense fallback={routeFallback}>
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