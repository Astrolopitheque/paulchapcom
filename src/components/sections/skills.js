import * as React from 'react';
import Box from '@mui/material/Box';
import StyledHeading from '../styledheading';
import Skill from '../skill';

const SkillsSection = () => {
  return (
    <section id='skills'>
      <StyledHeading>Mes compétences</StyledHeading>
      <Box display='flex' justifyContent='center' mb={5}>
        <Box
          width='min(100%, 800px)'
          overflow='hidden'
          sx={{
            borderTopLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        >
          <Skill
            progress={90}
            text='Javascript, JSX, React'
          />
          <Skill
            progress={85}
            text='NodeJS, Express, Gatsby'
          />
          <Skill
            progress={80}
            text='HTML, SEO'
          />
          <Skill
            progress={70}
            text='CSS, SASS, Bootstrap'
          />
          <Skill
            progress={50}
            text='MySQL / SQL, MongoDB'
          />
          <Skill
            progress={30}
            text='PHP'
          />
        </Box>
      </Box>
    </section>
  );
}

export default SkillsSection;