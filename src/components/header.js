import React, {useState} from 'react';
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
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { scrollToEl } from '../utils';

const sections = [
  { text: 'accueil', id: '#page-top' },
  { text: 'services', id: '#services' },
  { text: 'compétences', id: '#skills' },
  { text: 'portfolio', id: '#portfolio' },
  { text: 'tarifs', id: '#prices' },
  { text: 'contact', id: '#contact' },
];

const Header = () => {
  const theme = useTheme();
  const bigHeader = useMediaQuery(theme.breakpoints.up('md'));

  const [drawer, setDrawer] = useState(false);
  const openMenu = () => setDrawer(true);
  const closeMenu = () => setDrawer(false);

  const backToTop = () => scrollToEl('#page-top');
  const goToSection = selector => () => {
    closeMenu();
    scrollToEl(selector, { offset: bigHeader ? -120 : -80 }); // counter the header
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' elevation={0} sx={{bgcolor: '#fff'}}>
          <Toolbar sx={{ bgcolor: '#2b8273'}}>
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
            <Typography variant='h6' component='div' letterSpacing={1.4} flexGrow={1}>
              Paul Chaperon
            </Typography>
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              title='Remonter en haut de la page'
              aria-label='go top'
              sx={{ mr: {xs: 0, sm: 2}, display: {md: 'none'} }}
              onClick={backToTop}
            >
              <ArrowUpwardRoundedIcon />
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label='settings'
            >
              <SettingsIcon />
            </IconButton>
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
                  onClick={goToSection(id)}
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
      </Box>
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
                onClick={goToSection(id)}
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  justifyContent: 'flex-start',
                  letterSpacing: 2,
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