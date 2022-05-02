import * as React from 'react';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children, color, sx }) => {
  return (
    <Typography
      fontFamily='Roboto Condensed, sans-serif'
      variant='h2'
      fontSize={{xs: '1.9em', md: '2.8em'}}
      align='center'
      sx={{
        mt: 6,
        mb: 3,
        color,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

StyledHeading.defaultProps = {
  align: 'left',
}

export default StyledHeading;