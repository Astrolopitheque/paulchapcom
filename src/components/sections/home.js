import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StyledHeading from '../styledheading';

const HomeSection = () => {
  return (
    <section>
      <Box display='flex' justifyContent='center'>
        <Paper
          sx={{
            color: 'white',
            bgcolor: '#69bab8',
            width: {sm: '80%', md: '70%', lg: '60%'},
            borderRadius: 0,
            p: 3,
            mb: 2,
            textAlign: 'center'
          }}
        >
          <StyledHeading sx={{ mt: 0 }}>Qui suis-je ?</StyledHeading>
          <Box display='flex' flexDirection='column' alignItems={'flex-end'}>
            <Typography
              mb={2}
              align='justify'
              width={{md: '90%'}}
            >
              <b>Passionné d'informatique</b> depuis mon enfance,
              j'ai longuement exploré cette discipline à travers <b>différents projets</b>.
              Aujourd'hui âgé de 18 ans et étudiant à Sorbonne Université,
              j'ai décidé de me lancer dans le monde professionnel en tant que <b>développeur indépendant</b>.
            </Typography>
            <Typography variant='h6' component='p'>
              Paul Chaperon
            </Typography>
          </Box>
        </Paper>
      </Box>
    </section>
  );
}

export default HomeSection;