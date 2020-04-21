import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import Paw from '../../assets/paw.png';
import { 
  Container,  
  Title,
  Image, 
  Form, 
  Button, 
  ButtonText, 
  PickerContainer, 
  PickerSize, 
  SubmitButton, 
  SubmitButtonText,
  ContainerResult,
  TextResult } from './styles';

export default function Home() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birth, setBirth] = useState(new Date());

  return (
    <Container>
      <Image source={Paw}/>
      <Title>Descubra a idade do seu dog em relação aos humanos</Title>
      
      <Form>
          
          <Button onPress={() => setShowDatePicker(!showDatePicker)}>
            <ButtonText>Quando seu dog nasceu ?</ButtonText>
          </Button>
          
          <PickerContainer>
            <PickerSize>
              <PickerSize.Item label="Selecione o Tamanho" value="null" />
              <PickerSize.Item label="small" value="small" />
              <PickerSize.Item label="medium" value="medium" />
              <PickerSize.Item label="big" value="big" />
            </PickerSize>
            {showDatePicker && (
              <DateTimePicker
                is24Hour={true}
                value={birth}
                display="default"
              />
            )}
          </PickerContainer>
          
          <SubmitButton>
            <SubmitButtonText>Calcular</SubmitButtonText>
          </SubmitButton>
          
          <ContainerResult>
              <TextResult>
                Seu Dog tem 15 anos adultos
              </TextResult>

          </ContainerResult>

      </Form>
      
    </Container>
  );
}
