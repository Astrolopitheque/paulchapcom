import * as React from 'react';
import { theme } from '../../variables';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import StyledHeading from '../styledheading';
import styled from '@emotion/styled';
import { scrollToEl } from '../../utils';

const TableCell = styled.td`
  padding: 15px;
  text-transform: uppercase;
`;

const PricesSection = () => {
  return (
    <section id="prices">
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Paper
          elevation={4}
          sx={{
            width: 'min(100%, 500px)',
            borderRadius: 0,
            borderTopLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th 
                  colSpan={2}
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.text.light,
                  }}
                >
                  <StyledHeading
                    sx={{
                      color: theme.text.light,
                      m: 0,
                      p: 2,
                    }}
                  >
                    Tarifs
                  </StyledHeading>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell
                  colSpan={2}
                  style={{
                    padding: 0,
                  }}
                >
                  <Button
                    variant='text'
                    fullWidth
                    sx={{
                      p: '15px',
                      color: theme.text.dark,
                      boxShadow: 'inset 0 0 currentColor',
                      borderRadius: 0,
                      transition: '0.3s',
                      '&:hover, &:active': {
                        boxShadow: 'inset 1em 0 currentColor',
                      },
                    }}
                    onClick={() => scrollToEl('#contact')}
                  >
                    Demander un devis
                    <b style={{marginLeft: '0.3em'}}>
                      gratuitement
                    </b>
                  </Button>
                </TableCell>
              </tr>
              <tr style={{ color: '#fff', backgroundColor: theme.primary }}>
                <TableCell>Tarif horaire</TableCell>
                <TableCell>Tarif journalier moyen</TableCell>
              </tr>
              <tr>
                <TableCell>
                  55 €/heure
                </TableCell>
                <TableCell>
                  250 €/jour
                </TableCell>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Box>
    </section>
  );
}

export default PricesSection;
