import * as React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children }) => {
  return (
    <Typography
      variant="h2"
    >
      {'> > > '}{children}
    </Typography>
  );
}

const Home = () => {
  return (
    <Layout>
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