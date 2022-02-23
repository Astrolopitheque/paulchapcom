import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  {text: 'accueil'},
  {text: 'services'},
  {text: 'compétences'},
  {text: 'portfolio'},
  {text: 'tarifs'},
  {text: 'à propos'},
  {text: 'contact'},
  {text: 'paramètres'},
];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} sx={{bgcolor: '#2b8273'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: {md: 'none'}, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Paul Chaperon
          </Typography>
        </Toolbar>
        <Stack
          display={{ xs: 'none', md: 'flex' }}
          direction="row"
          justifyContent="space-around"
          color="#353535"
          bgcolor="white"
        >
          {
            sections.map(({text}) => 
              <Button
                key={text}
                color="inherit"
                sx={{
                  px: 2,
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
  );
}

export default Header;