import * as React from 'react';
import Box from '@mui/material/Box';
import StyledHeading from '../styledheading';
import Competence from '../competence';

const SkillsSection = () => {
  return (
    <section id='skills'>
      <StyledHeading>Mes compétences</StyledHeading>
      <Box display='flex' justifyContent='center' mb={5}>
        <Box width='min(100%, 800px)'>
          <Competence
            progress={90}
            text='Javascript, JSX, React'
          />
          <Competence
            progress={85}
            text='NodeJS, Express, Gatsby'
          />
          <Competence
            progress={80}
            text='HTML, SEO'
          />
          <Competence
            progress={70}
            text='CSS, SASS, Bootstrap'
          />
          <Competence
            progress={65}
            text='MySQL / SQL, MongoDB'
          />
          <Competence
            progress={50}
            text='PHP'
          />
        </Box>
      </Box>
    </section>
  );
}

export default SkillsSection;