import React from 'react';
import Product from '../components/sections/Product';
import PageHeader from '../components/common/PageHeader';

const ProductPage = () => {
  return (
    <div>
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