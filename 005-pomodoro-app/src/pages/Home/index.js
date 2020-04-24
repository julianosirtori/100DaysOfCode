import React, { useState, useEffect, useRef } from 'react';
import {
  set, format, getTime, subSeconds,
} from 'date-fns';

import {
  Container, ContainerButtons, Button, ButtonText, ClockText,
} from './styles';

export default function Home() {
  const [time, setTime] = useState(0);
  const [statusTime, setStatusTime] = useState('stop');

  const timeRef = useRef(time);
  const intervalRef = useRef();

  function setTimeMinutes(minutes) {
    const newTime = getTime(set(new Date(), { minutes, seconds: 0 }));
    setTime(newTime);
    timeRef.current = newTime;
  }

  useEffect(() => {
    setTimeMinutes(25);
  }, []);


  function startTime() {
    setStatusTime('started');
    intervalRef.current = setInterval(() => {
      timeRef.current = getTime(subSeconds(timeRef.current, 1));
      setTime(timeRef.current);
    }, 1000);
  }

  function pauseTime() {
    setStatusTime('paused');
    clearInterval(intervalRef.current);
  }

  function stopTime() {
    setStatusTime('stop');
    clearInterval(intervalRef.current);
    setTimeMinutes(25);
  }

  function saveTime() {

  }

  function getButton() {
    switch (statusTime) {
      case 'stop':
        return (
          <>
            <Button onPress={startTime}>
              <ButtonText>INCIAR</ButtonText>
            </Button>
            <Button onPress={stopTime}>
              <ButtonText>PARAR</ButtonText>
            </Button>
          </>
        );
      case 'started':
        return (
          <>
            <Button onPress={pauseTime}>
              <ButtonText>PAUSAR</ButtonText>
            </Button>
            <Button onPress={stopTime}>
              <ButtonText>PARAR</ButtonText>
            </Button>
          </>
        );
      case 'paused':
        return (
          <>
            <Button onPress={startTime}>
              <ButtonText>CONTINUAR</ButtonText>
            </Button>
            <Button onPress={saveTime}>
              <ButtonText>FEITO</ButtonText>
            </Button>
          </>
        );
      default:
        return '';
    }
  }

  return (
    <Container>
      <ClockText>{format(time, 'mm:ss')}</ClockText>
      <ContainerButtons>
        {
         getButton()
        }
      </ContainerButtons>
    </Container>
  );
}
