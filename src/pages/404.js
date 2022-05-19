import * as React from 'react';
import Metadata from '../components/metadata';
import { Link } from "gatsby"
import { StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Countdown from '../components/countdown';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';
import "@fontsource/dosis/600.css"
import "@fontsource/roboto-condensed/400.css"
import "@fontsource/roboto-condensed/700.css"
import '../styles/global.css';


const sway = keyframes`
  from {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(10deg);
  }
`;

const NotFound = () => {
  const redirect = () => document.location.href = '/';
  const countdownStr = n => n.toString().padStart(2, '0');

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
          mt={3}
          fontFamily='Roboto Condensed, sans-serif'
          fontSize={{ xs: 16, md: 25 }}
        >
          Oops ! Il semblerait que cette page n'existe pas ! <br />
          Vous serez redirigé vers <Link to='/'>l'accueil</Link>{' '}
          dans <Countdown start={10} callback={redirect} str={countdownStr} /> secondes
        </Typography>
        <Typography
          variant='h1'
          mt={5}
          color='rgba(0, 0, 0, 0.15)'
          fontFamily='Dosis, sans-serif'
          fontSize={{ xs: 200, md: 300 }}
          sx={{
            animation:`2s ease-in-out 0s infinite alternate ${sway}`,
            '-webkit-user-select': 'none',      
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
          }}
        >
          404
        </Typography>
      </Container>
    </StylesProvider>
  );
}

export default NotFound;