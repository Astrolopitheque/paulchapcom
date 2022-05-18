import * as React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Container from '@mui/material/Container';
import StyledHeading from '../components/styledheading';

const Index = () => {
  return (
    <Layout>
      <Metadata />
      <Container>
        <StyledHeading>Services proposés</StyledHeading>
      </Container>
    </Layout>
  );
}

export default Index;