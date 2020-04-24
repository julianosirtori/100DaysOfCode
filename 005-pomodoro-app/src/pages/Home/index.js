import React, { useState, useEffect } from 'react';
import { set, format } from 'date-fns';

import {
  Container, ContainerButtons, Button, ButtonText, ClockText,
} from './styles';

export default function Home() {
  const [time, setTime] = useState('');

  function setTimeMinutes(minutes) {
    setTime(format(set(new Date(), { minutes, seconds: 0 }), 'mm:ss'));
  }

  useEffect(() => {
    setTimeMinutes(25);
  }, []);


  return (
    <Container>
      <ClockText>{time}</ClockText>
      <ContainerButtons>
        <Button>
          <ButtonText>INICIAR</ButtonText>
        </Button>
        <Button>
          <ButtonText>PARAR</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
  );
}
