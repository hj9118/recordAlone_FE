import React from 'react';
import Header from '../component/template/Header';
import Footer from '../component/template/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
