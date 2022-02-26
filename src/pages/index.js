import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import CircularCompetence from '../components/circularcompetence';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children, align, color, sx }) => {
  return (
    <Typography
      variant="h2"
      fontSize={{xs: '1.9em', md: '3.5em'}}
      align={align}
      sx={{
        my: 3,
        color,
        ...sx,
      }}
    >
      {(align === 'left' || align === 'justify') && '>>> '}
      {align === 'right' && '• '}
      {align === 'center' && '— '}
      {children}
      {align === 'center' && ' —'}
      {align === 'right' && ' •'}
    </Typography>
  );
}

StyledHeading.defaultProps = {
  align: 'left',
}

const Index = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <Box display="flex" justifyContent="center">
        <Paper
          sx={{
            color: 'white',
            bgcolor: '#69BAB8',
            width: {sm: '80%', md: '70%', lg: '60%'},
            borderRadius: 0,
            p: 3,
            mb: 4,
            textAlign: 'center'
          }}
        >
          <StyledHeading align="center" sx={{ mt: 0 }}>Qui suis-je ?</StyledHeading>
          <Box display="flex" flexDirection="column" alignItems={'flex-end'}>
            <Typography mb={2} align="justify" width={{md: '90%'}}>
              <b>Passionné d'informatique</b> depuis mon enfance,
              j'ai longuement exploré cette branche des sciences à travers <b>différents projets</b>.
              Aujourd'hui âgé de 18 ans et étudiant à Sorbonne Université,
              j'ai décidé de me lancer dans le monde professionnel en tant que <b>développeur indépendant</b>.
            </Typography>
            <Typography variant="h6" component="p">
              Paul Chaperon
            </Typography>
          </Box>
        </Paper>
        </Box>
        <StyledHeading align="right">Services proposés</StyledHeading>
        <StyledHeading>Mes compétences</StyledHeading>
          Fuck these guys :
          <Box display="flex" justifyContent="center">
            <CircularCompetence
              ableness={90}
              size="max(15%, 100px)"
            >
              NodeJS
            </CircularCompetence>
            <CircularCompetence
              ableness={90}
              size="max(15%, 100px)"
            >
              Javascript
            </CircularCompetence>
            <CircularCompetence
              ableness={85}
              size="max(15%, 100px)"
            >
              Express
            </CircularCompetence>
          </Box>
          <Box display="flex" justifyContent="center">
            <CircularCompetence
              ableness={80}
              size="max(15%, 100px)"
            >
              React
            </CircularCompetence>
            <CircularCompetence
              ableness={75}
              size="max(15%, 100px)"
            >
              Gatsby
            </CircularCompetence>
          </Box>
        <StyledHeading align="right">Mon portfolio</StyledHeading>
        <StyledHeading>Tarifs</StyledHeading>
        <StyledHeading align="center">Contactez-moi !</StyledHeading>
        Nadia mon bb ❤
      </Container>
    </Layout>
  );
}

export default Index;