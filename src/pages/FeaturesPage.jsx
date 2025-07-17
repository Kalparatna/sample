import React from 'react';
import Features from '../components/sections/Features';
import PageHeader from '../components/common/PageHeader';
import SEOHead from '../components/common/SEOHead';

const FeaturesPage = () => {
  return (
    <div>
      <SEOHead 
        title="CopMap Features - Advanced Police Automation Solutions | Bandobast, Tracking & Management"
        description="Explore CopMap's powerful features: smart bandobast planning, live officer tracking, digital patrolling, force requirements, and automated documentation for efficient police operations."
        keywords="police automation features, bandobast planning software, officer tracking technology, patrol management system, force deployment automation, digital police documentation"
        canonical="/features"
      />
      <PageHeader 
        title="Features & Solutions"
        subtitle="Comprehensive tools for modern policing"
        description="Explore the powerful features that make CopMap the ultimate solution for law enforcement operations."
      />
      <Features />
    </div>
  );
};

export default FeaturesPage;