import * as React from 'react';
import Metadata from '../components/metadata';
import { Link } from "gatsby"
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Countdown from '../components/countdown';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "@fontsource/dosis/600.css"
import "@fontsource/roboto-condensed/400.css"
import "@fontsource/roboto-condensed/700.css"
import '../styles/global.css';

const NotFound = () => {
  const redirect = () => document.location.href = '/';

  return (
    <StylesProvider injectFirst>
      <Metadata title="Page introuvable" />
      <CssBaseline />
      <Container sx={{ mt: 7, textAlign: 'center' }}>
        <Typography
          variant='h3'
          fontFamily='Roboto Condensed, sans-serif'
          fontSize={{ xs: 35, md: 50 }}
        >
          Page introuvable
        </Typography>
        <Typography
          variant='h5'
          color='#777'
          mt={2}
          fontFamily='Roboto Condensed, sans-serif'
          fontSize={{ xs: 16, md: 25 }}
        >
          Oops ! Il semblerait que cette page n'existe pas ! <br />
          Vous serez redirigé vers <Link to='/'>l'accueil</Link>{' '}
          dans <Countdown start={100000} callback={redirect} /> secondes
        </Typography>
        <Typography
          variant='h1'
          fontFamily='Dosis, sans-serif'
          fontSize={{ xs: 200, md: 300 }}
        >
          404
        </Typography>
      </Container>
    </StylesProvider>
  );
}

export default NotFound;