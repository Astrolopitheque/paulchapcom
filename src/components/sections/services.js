import * as React from 'react';
import StyledHeading from '../styledheading';
import Box from '@mui/material/Box';
import Service from '../service';

const SkillsSection = () => {
  return (
    <section id='services'>
      <StyledHeading>Services proposés</StyledHeading>
      <Box display='flex' justifyContent='center'>
        <div style={{ padding: 4, border: '1px solid #333' }}>
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
        </div>
      </Box>
    </section>
  );
}

export default SkillsSection;