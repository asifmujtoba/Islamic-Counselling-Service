import React from 'react';
import Service from './services';
import Cta from '../../layout/Cta';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const Services = () => {

  return (
    <>
      <Header/>
      <Service invertMobile topDivider imageFill className="illustration-section-02" />
     
      <Cta split />
      <Footer />
    </>
  );
}

export default Services;