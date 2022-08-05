import * as React from 'react';
import { theme } from '../variables';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children, color, sx }) => {
  return (
    <Typography
      variant='h2'
      fontFamily='Roboto Condensed, sans-serif'
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
  color: theme.text.dark,
}

export default StyledHeading;