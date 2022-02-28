import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularCompetence = ({ text, progress, size }) => {
  return (
    <Box display='inline-block' width={size} height={size} mx={1} my={0.5}>
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={5}
        styles={{
          root: {
            padding: '8%',
            backgroundColor: '#822b3a',
            borderRadius: '50%',
          },
          trail: {
            display: 'none',
          },
          path: {
            stroke: '#ffffff',
          },
        }}
      >
        <Typography
          variant='h6'
          component='p'
          color='#ffffff'
          textTransform='uppercase'
          letterSpacing={1.5}
          fontSize={{ xs: '0.45em', md: '1em' }}
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