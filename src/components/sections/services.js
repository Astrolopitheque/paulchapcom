import * as React from 'react';
import { theme } from '../../variables';
import StyledHeading from '../styledheading';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Service from '../service';

const ServicesSection = () => {
  return (
    <section
      id='services'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <StyledHeading>Services proposés</StyledHeading>
      <Paper
        elevation={4}
        style={{
          borderRadius: 0,
          borderTopLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <Box width={{ sm: 500, md: 700 }}>
          <Service summary='Création de site web'>
            Site vitrine, E-commerce, Intranet.
          </Service>
          <Service summary='Accompagnement & conseil'>
            Une expertise mis à votre profit : définition des problèmes, caractérisation et conception d'une solution répondant aux besoins, et suivi du produit final.
          </Service>
          <Service summary='Intégration Web'>
            La priorité est mise sur le respect des standards du Web.
          </Service>
          <Service summary='Conception graphique & webdesign'>
            Des sites à l'identité visuelle unique, compatibles sur tous supports.
          </Service>
          <Service summary='Référencement naturel & SEO'>
            Un code propre et optimisé pour apparaître en tête des recherches.
          </Service>
        </Box>
      </Paper>
    </section>
  );
}

export default ServicesSection;