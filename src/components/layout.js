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
      <Header />
      <Toolbar sx={{ mb: 4, height: {md: '100px'} }}/>
      <main>
        {children}
      </main>
      <Toolbar sx={{ mt: 4 }}/>
      <Footer />
    </StylesProvider>
  );
}

export default Layout;