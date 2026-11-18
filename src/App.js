import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Navigate to="/#servicos" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
