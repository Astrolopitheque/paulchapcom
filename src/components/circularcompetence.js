import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularCompetence = ({ text, progress, size }) => {
  let color = '#0066db'; // blue
  if(progress < 25) color = '#f60b0b'; // red
  else if(progress < 50) color = '#f16f0f'; // orange
  else if(progress < 75) color = '#fffb00'; // yellow
  else if(progress < 100) color = '#14c20b'; // green

  return (
    <Box display='inline-block' width={size} height={size} mx={1} my={0.5}>
      <CircularProgressbarWithChildren
        value={progress}
        styles={{
          root: {
            padding: '6%',
            backgroundColor: '#c5ccd7',
            borderRadius: '50%',
          },
          trail: {
            display: 'none',
          },
          path: {
            stroke: color,
          },
        }}
      >
        <Typography
          variant='h6'
          component='p'
          color='inherit'
          fontSize={{xs: '0.65em', md: '1.3em'}}
        >
          {text}
        </Typography>
      </CircularProgressbarWithChildren>
    </Box>
  );
}

CircularCompetence.defaultProps = {
  progress: 0,
  size: '100px',
}

export default CircularCompetence;