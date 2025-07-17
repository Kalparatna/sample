import React from 'react';
import About from '../components/sections/About';
import PageHeader from '../components/common/PageHeader';

const AboutPage = () => {
  return (
    <div>
      <PageHeader 
        title="About CopMap"
        subtitle="Understanding the Police Hierarchy & Operations"
        description="Learn about our mission to digitize and modernize law enforcement operations across India."
      />
      <About />
    </div>
  );
};

export default AboutPage;