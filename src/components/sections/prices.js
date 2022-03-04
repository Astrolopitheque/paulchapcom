import * as React from 'react';
import StyledHeading from '../styledheading';

const PricesSection = () => {
  return (
    <>
      <StyledHeading id='portfolio' align='right'>Mon portfolio</StyledHeading>
      TODO : rendre le tableau bien drippy issou + le remplir coijdsgvlsiudwo
      <table style={{ border: '1px solid #333' }}>
        <thead>
          <tr>
            <th colspan={2} style={{ backgroundColor: '#333', color: '#fff' }}>
              <StyledHeading id='prices' align='center'>Tarifs</StyledHeading>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan={2} style={{ border: '1px solid #333' }}>Faut un devis bozo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>Tarif horaire</td>
            <td style={{ border: '1px solid #333' }}>Tarif journalier moyen</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>Jsp €/heure</td>
            <td style={{ border: '1px solid #333' }}>Aucune idée €/jour</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PricesSection;