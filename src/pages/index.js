import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children }) => {
  return (
    <Typography
      variant="h2"
      fontSize={{xs: '1.6em', md: '3.5em'}}
    >
      {'> > > '}{children}
    </Typography>
  );
}

const Home = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <StyledHeading>Qui suis-je ?</StyledHeading>
        <StyledHeading>Services proposés</StyledHeading>
        <StyledHeading>Mes compétences</StyledHeading>
        <StyledHeading>Mon portfolio</StyledHeading>
        <StyledHeading>Mes compétences</StyledHeading>
        <StyledHeading>Tarifs</StyledHeading>
        <StyledHeading>Contactez-moi !</StyledHeading>
      </Container>
    </Layout>
  );
}

export default Home;