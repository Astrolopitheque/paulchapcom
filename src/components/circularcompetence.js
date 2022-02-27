import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularCompetence = ({ text, ableness, size }) => {
  let color = '#0066db'; // blue
  if(ableness < 25) color = '#f60b0b'; // red
  else if(ableness < 50) color = '#f16f0f'; // orange
  else if(ableness < 75) color = '#fffb00'; // yellow
  else if(ableness < 100) color = '#14c20b'; // green

  return (
    <Box display="inline-block" width={size} height={size} mx={1} my={0.5}>
      <CircularProgressbarWithChildren
        value={ableness}
        styles={{
          root: {
            padding: '8%',
            backgroundColor: '#c5ccd7',
            borderRadius: '50%',
          },
          trail: {
            display: 'none',
          },
          path: {
            stroke: color,
          },
          text: {
            fill: '#353535',
          }
        }}
      >
        <Typography variant="h6" component="p" fontSize={{xs: '0.65em', md: '1.3em'}}>
          {text}
        </Typography>
      </CircularProgressbarWithChildren>
    </Box>
  );
}

CircularCompetence.defaultProps = {
  ableness: 0,
  size: '100px',
}

export default CircularCompetence;