import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CircularCompetence = ({ children, ableness, size, sx }) => {
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
    <Box bgcolor="red" width={size} display="inline-flex" justifyContent="center" alignItems="center">
    <CircularProgress
      variant="determinate"
      value={progress}
      size={size}
      sx={{
        color,
        bgcolor: '#c5ccd7',
        borderRadius: 50,
        p: 1,
      }}
    />
    <Typography position="absolute" fontSize="50%">{children}</Typography>
    </Box>
  );
}

CircularCompetence.defaultProps = {
  ableness: 0,
  size: '100px',
}

export default CircularCompetence;