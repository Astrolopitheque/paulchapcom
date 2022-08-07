import * as React from 'react';
import { theme } from '../../variables';
import Box from '@mui/material/Box';
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
        <table
          style={{
            width: 'min(100%, 500px)',
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
                  borderTopLeftRadius: '20px',
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
            <tr style={{ color: '#fff', backgroundColor: theme.secondary }}>
              <TableCell>Tarif horaire</TableCell>
              <TableCell>Tarif journalier moyen</TableCell>
            </tr>
            <tr>
              <TableCell
                style={{
                  backgroundColor: theme.light.secondary,
                }}
              >
                55 €/heure
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: theme.light.secondary,
                  borderBottomRightRadius: '20px',
                }}
              >
                250 €/jour
              </TableCell>
            </tr>
          </tbody>
        </table>
      </Box>
    </section>
  );
}

export default PricesSection;
