import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Layout from './components/layout/Layout';

// Page Components
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          {/* Product Page */}
          <Route
            path="/product"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />

          {/* Features Page */}
          <Route
            path="/features"
            element={
              <Layout>
                <FeaturesPage />
              </Layout>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />

          {/* Legal Page */}
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;