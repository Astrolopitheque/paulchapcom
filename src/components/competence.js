import * as React from 'react';
import { theme } from '../variables';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const Competence = ({ text, progress }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      mb={3}
      color={ theme.secondary }
    >
      <Typography
        position='absolute'
        zIndex={1000}
        pl={2}
        variant='h6'
        component='p'
        fontSize={{ xs: '1em', md: '1.1em' }}
        color={ theme.text.light }
        textAlign='left'
      >
        {text}
      </Typography>
      <LinearProgress
        variant='determinate'
        value={progress}
        color='inherit'
        sx={{ height: '2em', flexGrow: 1 }}
      />
    </Box>
  );
}

Competence.defaultProps = {
  progress: 0,
  size: '100px',
}

export default Competence;