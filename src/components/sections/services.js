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
              Mais c'est génial
            </Service>
            <Service summary='Solutions spécifiques'>
              Ouais
            </Service>
            <Service summary='Gestion de projets web'>
              Mais c'est génial
            </Service>
            <Service summary='Gestion de projets web'>
              Mais c'est génial
            </Service>
            <Service summary='Gestion de projets web'>
              Mais c'est génial
            </Service>
          </Box>
        </div>
      </Box>
    </section>
  );
}

export default SkillsSection;