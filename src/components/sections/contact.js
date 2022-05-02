import * as React from 'react';
import Box from '@mui/material/Box';
import StyledHeading from '../styledheading';
import Typography from '@mui/material/Typography';
import ContactInfo from '../contactinfo';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';

const ContactSection = () => {
  const sirenDescription = `
  Le numéro SIREN (pour « système d'identification du répertoire des entreprises »)
  est le numéro unique d'identification de chaque entreprise.
  C'est ce numéro qui permet d'identifier chaque entreprise auprès des administrations.
  `;

  return (
    <section id='contact'>
      <StyledHeading>Contactez-moi !</StyledHeading>
      <Typography
        color='#666' // your soul is mine now
        textAlign='center'
        fontFamily='Roboto Condensed, sans-serif'
        fontWeight={700}
        textTransform='uppercase'
      >
        Une idée ? Un projet ? N'hésitez pas à demander un devis, c'est gratuit !
      </Typography>
      <Box
        display='flex'
        justifyContent={{ sm: 'center' }}
        overflow={{ xs: 'scroll', sm: 'visible' }}
        my={2}
      >
        <ContactInfo icon={ LocationOnIcon } name='Adresse'>
          Bagnolet 93170, France
        </ContactInfo>
        <ContactInfo icon={ EmailIcon } name='E-Mail'>
          <a 
            href='mailto:paul@paulchap.com'
            style={{
              color: 'inherit',
            }}
          >
            paul@paulchap.com
          </a>
        </ContactInfo>
        <ContactInfo icon={ SettingsIcon } name='Siren'>
          <Box display='flex' justifyContent='center'>
            [A remplir]
            <Tooltip title={ sirenDescription } sx={{ ml: 1, cursor: 'pointer' }}>
              <HelpIcon />
            </Tooltip>
          </Box>
        </ContactInfo>
      </Box>
      <Typography
        textAlign='center'
        fontFamily='Roboto Condensed, sans-serif'
      >
        Un message détaillé permet une réponse plus rapide et plus précise
      </Typography>
    </section>
  );
}

export default ContactSection;