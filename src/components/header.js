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

const sections = [
  {text: 'accueil'},
  {text: 'services'},
  {text: 'compétences'},
  {text: 'portfolio'},
  {text: 'tarifs'},
  {text: 'contact'},
];

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const openMenu = () => setDrawer(true);
  const closeMenu = () => setDrawer(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" elevation={0} sx={{bgcolor: '#2b8273'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open menu"
              sx={{ display: {md: 'none'}, mr: 2 }}
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" letterSpacing={1.4} flexGrow={1}>
              Paul Chaperon
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="go top"
              sx={{ mr: {xs: 0, sm: 3}, display: {md: 'none'} }}
            >
              <ArrowUpwardRoundedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="settings"
            >
              <SettingsIcon />
            </IconButton>
          </Toolbar>
          <Stack
            display={{ xs: 'none', md: 'flex' }}
            direction="row"
            color="#353535"
            bgcolor="white"
          >
            {
              sections.map(({text}, i) => 
                <Button
                  key={text}
                  color="inherit"
                  fullWidth
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
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
        sx={{ display: {md: 'none'} }}
      >
        <Box>
          <IconButton
            size="large"
            color="inherit"
            aria-label="close menu"
            sx={{ float: 'right' }}
            onClick={closeMenu}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {
          sections.map(({text}, i) => 
            <Button
              key={text}
              color="inherit"
              sx={{
                mt: 0.8,
                pl: 6,
                pr: 5,
                py: 1.5,
                borderRadius: 0,
                justifyContent: 'flex-start',
                letterSpacing: 2,
              }}
            >
              {text}
            </Button>
          )
        }
      </Drawer>
    </>
  );
}

export default Header;