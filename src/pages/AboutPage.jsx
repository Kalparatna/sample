import React from 'react';
import About from '../components/sections/About';
import PageHeader from '../components/common/PageHeader';
import SEOHead from '../components/common/SEOHead';

const AboutPage = () => {
  return (
    <div>
      <SEOHead 
        title="About CopMap - EyeQlytics Technologies | Police Hierarchy & Operations Digitization"
        description="Learn about CopMap's mission to modernize India's police operations. Understanding police hierarchy from state to ground level and our vision for digital law enforcement transformation."
        keywords="CopMap company, EyeQlytics Technologies, police hierarchy India, law enforcement digitization, police operations modernization, police technology company"
        canonical="/about"
      />
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