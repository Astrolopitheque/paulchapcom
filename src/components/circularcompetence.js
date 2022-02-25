import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularCompetence = ({ children, ableness, size }) => {
  let color = 'blue';
  if(ableness < 25) color = 'red';
  else if(ableness < 50) color = 'orange';
  else if(ableness < 75) color = 'yellow';
  else if(ableness < 100) color = 'green';

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(ableness);
  }, [ableness]);

  return (
    <Box
      p={1}
      width={size}
      bgcolor="#c5ccd7"
      borderRadius="50%"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        sx={{ color }}
      />
      <span style={{ position: 'absolute' }}>{children}</span>
    </Box>
  );
}

CircularCompetence.defaultProps = {
  ableness: 0,
  size: '100px',
}

export default CircularCompetence;