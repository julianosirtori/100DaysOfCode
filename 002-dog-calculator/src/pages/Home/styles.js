import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 32px;
  flex-direction: column;
  align-items: center;
  background: #5A1E82;
  height: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  
  font-size: 18px;
  text-align: center;
  width: 100%;
  margin-top: 16px;
  max-width: 240px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 32px;
  
`;

export const Form = styled.View` 
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 240px;
`;

export const BirhText = styled.Text`
  margin-top: 32px;
  font-size: 16px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  
  background: #F24783;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  height: 38px;
  width: 100%;
  max-width: 240px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  
`;

export const ContainerResult = styled.View`
  align-items: center;
  justify-content: center;
  height: 64px;
  margin-top: 32px;
  
`;

export const TextResult = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

`;
