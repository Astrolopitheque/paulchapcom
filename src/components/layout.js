import * as React from 'react';
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/header';
import Footer from '../components/footer';
import Toolbar from '@mui/material/Toolbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/global.css';

const Layout = ({children}) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <span id="page-top" />
      <Header />
      <Toolbar sx={{ mb: 3, height: {md: '110px'} }}/>
      <main>
        {children}
      </main>
      <Toolbar sx={{ m: 1.5, height: {xs: '100px', md: '70px'} }}/>
      <Footer />
    </StylesProvider>
  );
}

export default Layout;