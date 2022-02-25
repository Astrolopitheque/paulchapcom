import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TrackVisibility from 'react-on-screen';

const CircularCompetence = ({ children, ableness, size }) => {
  let color = 'blue';
  if(ableness < 25) color = 'red';
  else if(ableness < 50) color = 'orange';
  else if(ableness < 75) color = 'yellow';
  else if(ableness < 100) color = 'green';

  return (
    <TrackVisibility tag="span">
      {
        ({isVisible}) =>
          <Box
            p={1}
            bgcolor="#c5ccd7"
            borderRadius="50%"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress
              variant="determinate"
              value={isVisible ? ableness : 0}
              size={size}
              sx={{ color }}
            />
            <span style={{ position: 'absolute' }}>{children}</span>
          </Box>
      }
    </TrackVisibility>
  );
}

CircularCompetence.defaultProps = {
  ableness: 0,
  size: '100px',
}

export default CircularCompetence;