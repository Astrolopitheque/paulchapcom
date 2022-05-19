import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialButton = ({ icon, title, href }) => {
  const IconElement = icon;
  return (
    <Tooltip title={title}>
      <IconButton
        color='inherit'
        href={href}
        rel='noopener noreferrer'
        target='_blank'
        sx={{
          mx: 0.5,
        }}
      >
        <IconElement />
      </IconButton>
    </Tooltip>
  );
}

const Footer = () => {
  return (
    <AppBar position='relative' elevation={0} sx={{ mt: 4, bgcolor: '#2b8273' }}>
      <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <Typography mt={2} mb={{sm: 2}} sx={{ flexGrow: 1 }}>
          Site développé par Paul Chaperon &copy; {new Date().getFullYear()}{' '}
        </Typography>
        <Stack my={1} direction='row'>
          <SocialButton
            icon={GitHubIcon}
            title='Astrolopitheque'
            href='https://github.com/Astrolopitheque'
          />
          <SocialButton
            icon={InstagramIcon}
            title='@paul.freelance'
            href='https://www.instagram.com/paul.freelance/'
          />
          <SocialButton
            icon={TwitterIcon}
            title='Prochainement :)'
          />
          <SocialButton
            icon={LinkedInIcon}
            title='Prochainement :)'
          />
          <SocialButton
            icon={EmailIcon}
            title='paul@paulchap.com'
            href='mailto:paul@paulchap.com'
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;