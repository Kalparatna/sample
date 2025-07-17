import React from 'react';
import Features from '../components/sections/Features';
import PageHeader from '../components/common/PageHeader';

const FeaturesPage = () => {
  return (
    <div>
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