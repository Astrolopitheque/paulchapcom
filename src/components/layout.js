import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Layout = props => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Layout;