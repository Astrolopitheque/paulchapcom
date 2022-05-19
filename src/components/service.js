import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Service = ({ summary, children }) => {
  return (
    <Accordion
      elevation={0}
      sx={{ m: '0 !important', bgcolor: 'transparent' }}
    >
      <AccordionSummary
        sx={{
          '&.Mui-expanded': {
            minHeight: 0,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0',
          },
          height: 60,
          bgcolor: '#2b8273',
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
      >
        <Typography
          color='#fff'
          textTransform='uppercase'
          letterSpacing={2}
        >
          { summary }
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ py: 2 }}>
        <Typography>
          { children }
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Service;