import React from 'react';
import Hero from './Hero';
import Service from './Service';
import FeedBack from '../../layout/feedback';
import Cta from '../../layout/Cta';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const Home = () => {

  return (
    <>
      <Header/>
      <Hero invertMobile topDivider bottomDivider imageFill className="illustration-section-01" />
  
      <Service invertMobile topDivider imageFill className="illustration-section-02"/>
      <FeedBack topDivider />
      <Cta split />
      <Footer />
    </>
  );
}

export default Home;