import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { scrollToEl } from '../utils';

const sections = [
  { text: 'accueil', id: '#page-top' },
  { text: 'services', id: '#services' },
  { text: 'compétences', id: '#skills' },
  //{ text: 'portfolio', id: '#portfolio' },
  { text: 'tarifs', id: '#prices' },
  { text: 'contact', id: '#contact' },
];

const Header = () => {
  const theme = useTheme();
  const bigHeader = useMediaQuery(theme.breakpoints.up('md'));

  const [drawer, setDrawer] = useState(false);
  const openMenu = () => setDrawer(true);
  const closeMenu = () => setDrawer(false);

  const goToSection = selector => {
    closeMenu();
    scrollToEl(selector, { offset: bigHeader ? -120 : -80 }); // counter the header
  }

  return (
    <>
      <AppBar position='fixed' elevation={0} sx={{bgcolor: '#fff'}}>
        <Toolbar sx={{ bgcolor: '#2b8273' }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open menu'
            sx={{ display: {md: 'none'}, mr: 2 }}
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='div'
            fontFamily='Dosis, sans-serif'
            fontSize={{ xs: '1.3em', sm: '1.4em' }}
            letterSpacing={1.4}
            sx={{ cursor: 'pointer' }}
            onClick={() => scrollToEl('#page-top')}
          >
            Paul Chaperon
            <span style={{ color: '#353535' }}>.com</span>
          </Typography>
        </Toolbar>
        <Stack
          display={{ xs: 'none', md: 'flex' }}
          direction='row'
          color='#353535'
        >
          {
            sections.map(({text, id}, i) => 
              <Button
                key={text}
                color='inherit'
                fullWidth
                onClick={() => goToSection(id)}
                sx={{
                  py: 1.5,
                  borderRadius: 0,
                  fontSize: '0.7em',
                  letterSpacing: 2,
                }}
              >
                {text}
              </Button>
            )
          }
        </Stack>
      </AppBar>
      <Drawer
        anchor='left'
        open={drawer}
        onClose={closeMenu}
        sx={{ display: {md: 'none'} }}
        PaperProps={{
          sx: {
            color: 'inherit',
          }
        }}
      >
        <Box>
          <IconButton
            size='large'
            color='inherit'
            aria-label='close menu'
            onClick={closeMenu}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack overflow='scroll'>
          {
            sections.map(({text, id}, i) => 
              <Button
                key={text}
                color='inherit'
                onClick={() => goToSection(id)}
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  justifyContent: 'flex-start',
                  letterSpacing: 2,
                  boxShadow: 'inset 0em 0 currentColor', // keep box shadow from color shifting
                  transition: '0.5s',
                  '&:active': {
                    boxShadow: 'inset 0.5em 0 currentColor',
                  },
                }}
              >
                {text}
              </Button>
            )
          }
        </Stack>
      </Drawer>
    </>
  );
}

export default Header;