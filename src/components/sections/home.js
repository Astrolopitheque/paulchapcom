import * as React from 'react';
import { theme } from '../../variables';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StyledHeading from '../styledheading';

const HomeSection = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={4}
        sx={{
          width: { sm: '80%', md: '70%', lg: '60%' },
          borderRadius: 0,
          borderTopLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Box
            py={3}
            bgcolor={ theme.primary }
          >
            <StyledHeading sx={{ color: theme.text.light, my: 0 }}>
              Qui suis-je ?
            </StyledHeading>
          </Box>
          <Box
            color={ theme.text.dark }
            p={3}
            display='flex'
            flexDirection='column' alignItems={'flex-end'}
          >
            <Typography
              mb={2}
              align='justify'
              width={{ md: '90%' }}
            >
              <b>Passionné d'informatique</b> depuis mon enfance,
              j'ai longuement exploré cette discipline à travers <b>différents projets</b>.
              Aujourd'hui âgé de 19 ans et étudiant à Sorbonne Université,
              j'ai décidé de me lancer dans le monde professionnel en tant que <b>développeur indépendant</b>.
            </Typography>
            <Typography variant='h6' component='p'>
              Paul Chaperon
            </Typography>
          </Box>
        </div>
      </Paper>
    </section>
  );
}

export default HomeSection;