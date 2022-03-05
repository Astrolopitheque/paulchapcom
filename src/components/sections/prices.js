import * as React from 'react';
import Box from '@mui/material/Box';
import StyledHeading from '../styledheading';
import styled from '@emotion/styled';

const TableCell = styled.td`
  border: 1px solid #333;
`;

const PricesSection = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <table style={{ width: 'min(100%, 800px)', border: '1px solid #333' }}>
        <thead>
          <tr>
            <th colspan={2} style={{ backgroundColor: '#333', color: '#fff' }}>
              <StyledHeading id='prices' align='center'>Tarifs</StyledHeading>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell colspan={2}>Faut un devis bozo</TableCell>
          </tr>
          <tr>
            <TableCell>Tarif horaire</TableCell>
            <TableCell>Tarif journalier moyen</TableCell>
          </tr>
          <tr>
            <TableCell>Jsp €/heure</TableCell>
            <TableCell>Aucune idée €/jour</TableCell>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}

export default PricesSection;