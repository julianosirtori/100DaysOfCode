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
  const [stepPosition, setStepPosition] = useState(0);

  const steps = [2, 1, 2, 1, 2, 1, 5, 3];

  const timeRef = useRef(time);
  const intervalRef = useRef();

  function setTimeMinutes(minutes) {
    const newTime = getTime(set(new Date(), { minutes, seconds: 0 }));
    setTime(newTime);
    timeRef.current = newTime;
  }

  useEffect(() => {
    setTimeMinutes(steps[stepPosition]);
  }, []);

  function getMilliseconds(period) {
    const split = period.split(':');
    const milliseconds = split[0] * 60000;
    return milliseconds + (split[1] * 1000);
  }

  function startTime() {
    setStatusTime('started');
    intervalRef.current = setInterval(() => {
      timeRef.current = getTime(subSeconds(timeRef.current, 1));
      setTime(timeRef.current);
    }, 1000);

    const milliseconds = getMilliseconds(format(time, 'mm:ss')) + 1000;
    setTimeout(() => {
      let newPosition = stepPosition + 1;
      newPosition = newPosition === 9 ? 0 : newPosition;
      setTimeMinutes(steps[newPosition]);
      setStepPosition(newPosition);
      startTime();
      clearInterval(intervalRef.current);
    }, milliseconds);
  }

  function pauseTime() {
    setStatusTime('paused');
    clearInterval(intervalRef.current);
  }

  function stopTime() {
    setStatusTime('stop');
    clearInterval(intervalRef.current);
    setStepPosition(0);
    setTimeMinutes(steps[0]);
  }

  function saveTime() {

  }

  function getButtons() {
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
    <Container color={(stepPosition % 2 !== 0) ? '#b2df8a' : '#d04643'}>
      <ClockText>{format(time, 'mm:ss')}</ClockText>
      <ContainerButtons>
        {
         getButtons()
        }
      </ContainerButtons>
    </Container>
  );
}
