import React from 'react';
import Contact from '../components/sections/Contact';
import PageHeader from '../components/common/PageHeader';

const ContactPage = () => {
  return (
    <div>
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