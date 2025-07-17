import React from 'react';
import Hero from '../components/sections/Hero';
import SEOHead from '../components/common/SEOHead';

const HomePage = () => {
  return (
    <div>
      <SEOHead 
        title="CopMap - Revolutionary Law Enforcement Automation Platform | Police Operations Management"
        description="CopMap digitizes police operations across India with smart bandobast planning, real-time officer tracking, patrolling management, and automated documentation. Trusted by law enforcement agencies nationwide."
        keywords="police automation, law enforcement software, bandobast planning, officer tracking, police management system, India police technology, patrol management, force deployment"
        canonical="/"
      />
      <Hero />
    </div>
  );
};

export default HomePage;