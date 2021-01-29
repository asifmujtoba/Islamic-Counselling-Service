import React from 'react';
import Hero from './hero';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const AboutUs = () => {

  return (
    <>
      <Header/>
      <Hero invertMobile topDivider imageFill className="illustration-section-02" />
      
      <Footer />
    </>
  );
}

export default AboutUs;