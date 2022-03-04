import * as React from 'react';
import Typography from '@mui/material/Typography';

const StyledHeading = ({ children, id, align, color, sx }) => {
  return (
    <Typography
      id={id}
      variant='h2'
      fontSize={{xs: '1.9em', md: '3.5em'}}
      align={align}
      sx={{
        mt: 6,
        mb: 3,
        color,
        ...sx,
      }}
    >
      {(align === 'left' || align === 'justify') && '>>> '}
      {align === 'right' && '• '}
      {align === 'center' && '— '}
      {children}
      {align === 'center' && ' —'}
      {align === 'right' && ' •'}
    </Typography>
  );
}

StyledHeading.defaultProps = {
  align: 'left',
}

export default StyledHeading;