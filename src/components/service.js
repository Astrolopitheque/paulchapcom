import * as React from 'react';
import { theme } from '../variables';
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
          height: 60,
          bgcolor: theme.primary,
          '&.Mui-expanded': {
            minHeight: 0,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0',
          },
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fontSize: '2em',
              color: theme.text.light,
              transition: '0.2s',
              opacity: 0.2,
              '.MuiAccordionSummary-root:hover &, .MuiAccordionSummary-root.Mui-expanded &': {
                opacity: 1,
              },
            }}
          />
        }
      >
        <Typography
          color={ theme.text.light }
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