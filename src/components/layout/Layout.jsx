import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { OrganizationSchema } from '../common/StructuredData';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationSchema />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;