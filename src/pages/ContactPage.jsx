import React from 'react';
import Contact from '../components/sections/Contact';
import PageHeader from '../components/common/PageHeader';
import SEOHead from '../components/common/SEOHead';

const ContactPage = () => {
  return (
    <div>
      <SEOHead 
        title="Contact CopMap - Request Demo | Police Software Support & Sales"
        description="Get in touch with CopMap for demo requests, support, and sales inquiries. Contact EyeQlytics Technologies for police automation solutions. Phone: +91-9970283329"
        keywords="CopMap contact, police software demo, law enforcement technology support, EyeQlytics contact, police automation sales, CopMap demo request"
        canonical="/contact"
      />
      <PageHeader 
        title="Get in Touch"
        subtitle="Ready to modernize your police operations?"
        description="Contact us to schedule a demo or learn more about CopMap's capabilities."
      />
      <Contact />
    </div>
  );
};

export default ContactPage;