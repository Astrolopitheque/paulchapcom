import * as React from 'react';
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/header';
import Footer from '../components/footer';
import Toolbar from '@mui/material/Toolbar';
import '../styles/global.css';

const Layout = ({children}) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <span id='page-top' />
      <Header />
      <Toolbar sx={{ mb: 3, height: {md: '110px'} }}/>
      <main>
        {children}
      </main>
      <Footer />
    </StylesProvider>
  );
}

export default Layout;