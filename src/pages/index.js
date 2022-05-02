import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Container from '@mui/material/Container';
import StyledHeading from '../components/styledheading';
import HomeSection from '../components/sections/home';
import SkillsSection from '../components/sections/skills';
import PricesSection from '../components/sections/prices';
import ContactSection from '../components/sections/contact';

const Index = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <HomeSection />
        <section id='services'>
          <StyledHeading align='right'>Services proposés</StyledHeading>
        </section>
        <SkillsSection />
        <PricesSection />
        <ContactSection />
      </Container>
    </Layout>
  );
}

export default Index;