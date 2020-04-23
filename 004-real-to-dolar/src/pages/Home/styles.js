import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #4292bf;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    margin-bottom: 32px;
    color: #FFF;
  }
`;

export const Center = styled.div`
  width: 100%;
  max-width: 360px;
  border-radius: 4;
  border-radius: 4px;
  box-shadow: 0 0  10px #2229;
  background: #ffff;
  
  form{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 16px 32px 32px 32px;

    input{
      width: 100%;
      margin-bottom: 8px;
      text-align: center;
      padding: 4px 8px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #dedede;
    }

    button{
      margin-top: 16px;
      color: #fff;
      border: none;
      font-size: 16px;
      border-radius: 4px;
      font-weight: bold;
      padding: 8px;
      background: #33875d;
      
      &:hover{
        background: #1c4f36;
      }

      &:active{
        background: #88d8b0;
      }

    }
  }
`;

export const Resultado = styled.div`
  display:flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #1c4f36;

  span{
    margin-bottom: 8px;
  }
`;
