import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Title, Form, Button, ButtonText, PickerSize, SubmitButton, SubmitButtonText } from './styles';

export default function Home() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birth, setBirth] = useState(new Date());

  return (
    <Container>
      <Title>Quantos anos tem seu cachorro</Title>

      <Form>
          <Button onPress={() => setShowDatePicker(!showDatePicker)}>
            <ButtonText>Quando seu dog nasceu</ButtonText>
          </Button>
          <PickerSize>
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
          <SubmitButton>
            <SubmitButtonText>Calcular</SubmitButtonText>
          </SubmitButton>

      </Form>
      
    </Container>
  );
}
