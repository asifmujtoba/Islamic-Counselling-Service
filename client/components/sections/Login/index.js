import React from 'react';

import LoginSection from './login';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Redirect } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Header/>
      <LoginSection/>
      <Footer />
    </>
  );
}

export default Login;