import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import 'react-circular-progressbar/dist/styles.css';

const LinearCompetence = ({ text, progress, size }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      mx={1}
      my={0.5}
      color='#822b3a'
    >
      <Typography
        variant='h6'
        component='p'
        fontSize={{ xs: '0.7em', md: '1.1em' }}
        color='#353535'
        width={{ xs: '35%', md: '15%' }}
        textAlign='left'
      >
        {text}
      </Typography>
      <LinearProgress
        variant='determinate'
        value={progress}
        color='inherit'
        sx={{ p: 0.7, flexGrow: 1, borderRadius: 2 }}
      />
    </Box>
  );
}

LinearCompetence.defaultProps = {
  progress: 0,
  size: '100px',
}

export default LinearCompetence;