import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Container from '@mui/material/Container';
import HomeSection from '../components/sections/home';
import ServicesSection from '../components/sections/services';
import SkillsSection from '../components/sections/skills';
import PricesSection from '../components/sections/prices';
import ContactSection from '../components/sections/contact';

const Index = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <a href='/pagequinexistepas'>Page qui n'existe pas</a>
        <HomeSection />
        <ServicesSection />
        <SkillsSection />
        <PricesSection />
        <ContactSection />
      </Container>
    </Layout>
  );
}

export default Index;