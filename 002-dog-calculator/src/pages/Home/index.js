import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, isEqual } from 'date-fns';

import findIdadeHumana from '../../utils/dogMath';
import Paw from '../../assets/paw.png';
import {
  Container,
  Title,
  Image,
  Form,
  Button,
  ButtonText,
  BirhText,
  SubmitButton,
  SubmitButtonText,
  ContainerResult,
  TextResult,
} from './styles';

export default function Home() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [result, setResult] = useState('');
  const [birth, setBirth] = useState(new Date(1598051730000));


  function onChangeDatePicker(event, selectedDate) {
    const currentDate = selectedDate || birth;
    setShowDatePicker(false);
    setBirth(currentDate);
    setResult(findIdadeHumana(birth));
  }

  return (
    <Container>
      <Image source={Paw} />
      <Title>Descubra a idade do seu dog em relação aos humanos</Title>

      <Form>
        <BirhText>Data de Nascimento</BirhText>
        <Button onPress={() => setShowDatePicker(!showDatePicker)}>
          <ButtonText>
            {isEqual(birth, new Date(1598051730000)) ? 'Quando seu dog nasceu ?' : format(birth, 'dd/MM/yyyy') }
          </ButtonText>
          {showDatePicker && (
          <DateTimePicker
            is24Hour
            value={birth}
            display="default"
            mode="date"
            onChange={onChangeDatePicker}
          />
          )}
        </Button>

        {result !== '' && (
        <ContainerResult>
          <TextResult>
            {`Seu Dog tem ${result} anos adultos`}
          </TextResult>
        </ContainerResult>
        )}
      </Form>
    </Container>
  );
}
