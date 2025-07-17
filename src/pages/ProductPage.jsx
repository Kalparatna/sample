import React from 'react';
import Product from '../components/sections/Product';
import PageHeader from '../components/common/PageHeader';
import SEOHead from '../components/common/SEOHead';

const ProductPage = () => {
  return (
    <div>
      <SEOHead 
        title="CopMap Product - Complete Police Operations Management Platform | Features & Capabilities"
        description="Discover CopMap's comprehensive features: officer management, bandobast planning, real-time tracking, patrol control, mobile app integration, and automated reporting for modern law enforcement."
        keywords="police software features, bandobast automation, officer tracking system, patrol management, police mobile app, law enforcement technology, digital policing solutions"
        canonical="/product"
      />
      <PageHeader 
        title="Our Product"
        subtitle="Comprehensive law enforcement automation platform"
        description="Discover how CopMap transforms traditional police operations into smart, efficient, and coordinated workflows."
      />
      <Product />
    </div>
  );
};

export default ProductPage;