import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StyledHeading from '../styledheading';
import styled from '@emotion/styled';

const TableCell = styled.td`
  padding: 15px;
  text-transform: uppercase;
`;

const PricesSection = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <table
        style={{
          width: 'min(100%, 700px)',
          border: '1px solid #333',
          borderCollapse: 'separate',
          borderSpacing: 4,
        }}
      >
        <thead>
          <tr>
            <th 
              colSpan={2}
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
                variant='outlined'
                fullWidth
                sx={{
                  p: '15px',
                  color: '#333',
                  borderColor: '#333 !important',
                  borderRadius: 0,
                }}
              >
                Demander un devis
                <b style={{marginLeft: '0.3em'}}>
                  gratuitement
                </b>
              </Button>
            </TableCell>
          </tr>
          <tr style={{ color: '#fff', backgroundColor: '#822b3a' }}>
            <TableCell>Tarif horaire</TableCell>
            <TableCell>Tarif journalier moyen</TableCell>
          </tr>
          <tr style={{ backgroundColor: '#c8b0b9' }}>
            <TableCell>55 €/heure</TableCell>
            <TableCell>250 €/jour</TableCell>
          </tr>
        </tbody>
      </table>
      <Typography mt={2}>Un jour ouvré ≈ 5h de travail</Typography>
    </Box>
  );
}

export default PricesSection;