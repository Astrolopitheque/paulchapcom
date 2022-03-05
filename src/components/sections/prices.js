import * as React from 'react';
import Box from '@mui/material/Box';
import StyledHeading from '../styledheading';
import styled from '@emotion/styled';

const TableCell = styled.td`
  padding: 15px;
  text-transform: uppercase;
`;

const PricesSection = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <table
        style={{
          width: 'min(100%, 800px)',
          border: '1px solid #333',
          borderCollapse: 'separate',
          borderSpacing: 3,
        }}
      >
        <thead>
          <tr>
            <th 
              colspan={2}
              style={{
                backgroundColor: '#2b8273',
                color: '#fff',
              }}
            >
              <StyledHeading
                id='prices'
                align='center'
                sx={{
                  m: 0,
                  p: 3,
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
                textAlign: 'center',
                border: '1px solid #333',
              }}
            >
              Demander un devis <b>gratuitement</b>
            </TableCell>
          </tr>
          <tr style={{ color: '#fff', backgroundColor: '#822b3a' }}>
            <TableCell>Tarif horaire</TableCell>
            <TableCell>Tarif journalier moyen</TableCell>
          </tr>
          <tr style={{ backgroundColor: '#c8b0b9' }}>
            <TableCell>Jsp €/heure</TableCell>
            <TableCell>250 €/jour</TableCell>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}

export default PricesSection;