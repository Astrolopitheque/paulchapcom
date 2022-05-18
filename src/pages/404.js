import React, { useState, useEffect  } from 'react';
import Container from '@mui/material/Container';

const Index = () => {
  const [timeleft, setTimeleft] = useState(10);
  const redirect = () => document.location.href = '/';
  const decrement = () => setTimeleft(timeleft - 1);

  useEffect(() => {
    if(!timeleft) redirect();
    const timer = setTimeout(decrement, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Container>
      Cette page n'existe pas, vous serez redirigé vers l'accueil dans { timeleft }s
    </Container>
  );
}

export default Index;