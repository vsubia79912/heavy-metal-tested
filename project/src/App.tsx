import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CertificationProcess from './components/CertificationProcess';
import ProductCategories from './components/ProductCategories';
import CertifiedProducts from './components/CertifiedProducts';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <Hero />
        <Features />
        <CertificationProcess />
        <ProductCategories />
        <CertifiedProducts />
        <FAQ />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;