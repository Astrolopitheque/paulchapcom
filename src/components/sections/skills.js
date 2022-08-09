import * as React from 'react';
import Paper from '@mui/material/Paper';
import StyledHeading from '../styledheading';
import Skill from '../skill';

const SkillsSection = () => {
  return (
    <section
      id='skills' 
      style={{
        marginBottom: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <StyledHeading>Mes compétences</StyledHeading>
      <Paper
        elevation={4}
        sx={{
          bgcolor: 'transparent',
          width: 'min(100%, 800px)',
          overflow: 'hidden',
          borderRadius: 0,
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
      </Paper>
    </section>
  );
}

export default SkillsSection;