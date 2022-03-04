import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Container from '@mui/material/Container';
import StyledHeading from '../components/styledheading';
import HomeSection from '../components/sections/home';
import SkillsSection from '../components/sections/skills';
import PricesSection from '../components/sections/prices';

const Index = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <HomeSection />
        <StyledHeading id='services' align='right'>Services proposés</StyledHeading>
        <SkillsSection />
        <PricesSection />
        <StyledHeading id='contact' align='center'>Contactez-moi !</StyledHeading>
        Nadia mon bb ❤
      </Container>
    </Layout>
  );
}

export default Index;