import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Competence from '../components/competence';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children, id, align, color, sx }) => {
  return (
    <Typography
      id={id}
      variant='h2'
      fontSize={{xs: '1.9em', md: '3.5em'}}
      align={align}
      sx={{
        mt: 6,
        mb: 3,
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
            <StyledHeading align='center' sx={{ mt: 0 }}>Qui suis-je ?</StyledHeading>
            <Box display='flex' flexDirection='column' alignItems={'flex-end'}>
              <Typography mb={2} align='justify' width={{md: '90%'}}>
                <b>Passionné d'informatique</b> depuis mon enfance,
                j'ai longuement exploré cette branche des sciences à travers <b>différents projets</b>.
                Aujourd'hui âgé de 18 ans et étudiant à Sorbonne Université,
                j'ai décidé de me lancer dans le monde professionnel en tant que <b>développeur indépendant</b>.
              </Typography>
              <Typography variant='h6' component='p'>
                Paul Chaperon
              </Typography>
            </Box>
          </Paper>
        </Box>
        <StyledHeading id='services' align='right'>Services proposés</StyledHeading>
        <StyledHeading id='skills'>Mes compétences</StyledHeading>
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
          text='MySQL / SQL • MongoDB'
        />
        <Competence
          progress={50}
          text='PHP'
        />
        <StyledHeading id='portfolio' align='right'>Mon portfolio</StyledHeading>
        TODO : rendre le tableau bien drippy issou + le remplir coijdsgvlsiudwo
        <table style={{ border: '1px solid #333' }}>
          <thead>
            <tr>
              <th colspan={2} style={{ backgroundColor: '#333', color: '#fff' }}>
                <StyledHeading id='prices' align='center'>Tarifs</StyledHeading>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan={2} style={{ border: '1px solid #333' }}>Faut un devis bozo</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #333' }}>Tarif horaire</td>
              <td style={{ border: '1px solid #333' }}>Tarif journalier moyen</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #333' }}>Jsp €/heure</td>
              <td style={{ border: '1px solid #333' }}>Aucune idée €/jour</td>
            </tr>
          </tbody>
        </table>
        <StyledHeading id='contact' align='center'>Contactez-moi !</StyledHeading>
        Nadia mon bb ❤
      </Container>
    </Layout>
  );
}

export default Index;