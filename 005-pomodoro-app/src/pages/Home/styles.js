import styled from 'styled-components/native';

export const Container = styled.View`
  background: #d04643;
  height: 100%;
  width: 100%;
  padding: 32px;
  justify-content: center;
  align-items: center;
`;

export const ClockText = styled.Text`
    color: #fff;
    margin: 0 auto;
    font-size: 42px;
    font-weight: bold;
`;

export const ContainerButtons = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
    margin-right: 16px;
    width: 100%;
    max-width: 125px;
    align-items: center;
    border: 1px solid #fff;
    padding: 8px 16px;
    border-radius: 4px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;
