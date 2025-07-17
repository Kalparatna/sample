import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Product from './components/Product';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Navigation />
              <Hero />
              <Product />
              <Features />
              <About />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Legal Page */}
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
