import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

SocialButton.defaultProps = {
  delayAnimation: 0,
}

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' elevation={0} sx={{ top: 'auto', bottom: 0, bgcolor: '#2b8273' }}>
        <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
          <Typography mt={2} mb={{sm: 2}} sx={{ flexGrow: 1 }}>
            Site développé par Paul Chaperon &copy; {new Date().getFullYear().toString()}{' '}
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
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;