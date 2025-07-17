import React from 'react';
import Legal from '../components/sections/Legal';
import SEOHead from '../components/common/SEOHead';

const LegalPage = () => {
  return (
    <div>
      <SEOHead 
        title="CopMap Legal - Terms & Conditions, Privacy Policy, Security | EyeQlytics Technologies"
        description="CopMap's legal documentation including Terms & Conditions, Privacy Policy, and Security Policy for law enforcement software. Compliance with Indian regulations and data protection."
        keywords="CopMap terms conditions, police software privacy policy, law enforcement security policy, EyeQlytics legal, police technology compliance"
        canonical="/legal"
        noindex={true}
      />
      <Legal />
    </div>
  );
};

export default LegalPage;