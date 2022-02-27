import * as React from 'react';
import {Helmet} from "react-helmet";

const description = `Étudiant à Sorbonne Université et développeur indépendant, je me définis comme un passionné d'informatique. Les services que je propose : développement, design, création numérique.`;

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Développeur indépendant | Paul Chaperon</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Metadata;