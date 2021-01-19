import React from 'react';
import Hero from './hero';
import Feedback from '../../layout/feedback';
import Cta from '../../layout/Cta';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const Consultants = () => {

  return (
    <>
      <Header/>
      <Hero invertMobile topDivider imageFill hasBgColor="5aaaaa" className="illustration-section-02" />
      <Feedback topDivider />
      <Cta split />
      <Footer />
    </>
  );
}

export default Consultants;