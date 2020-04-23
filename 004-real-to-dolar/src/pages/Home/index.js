import React, { useState } from 'react';
import { getQuotationNow } from '../../services/api';

import { Container, Center, Resultado } from './styles';

export default function Home() {
  const [dolar, setDolar] = useState('');
  const [quotation, setQuotation] = useState('');
  const [real, setReal] = useState('');

  async function submit(event) {
    event.preventDefault();
    const response = await getQuotationNow();
    const { data } = response;
    const valor = data.value[0];
    setQuotation(valor.cotacaoCompra);
    setDolar(valor.cotacaoCompra * real);
  }

  function handleInputRealChange(event) {
    const { target } = event;
    setReal(target.value);
  }

  return (
    <Container>
      <h1> Converter Real para Dolar </h1>
      <Center>
        <form onSubmit={submit}>

          <input
            placeholder="real"
            type="number"
            step="0.01"
            value={real}
            required
            onChange={handleInputRealChange}
          />

          <button type="submit">Converter Para Dolar</button>
        </form>

        {
            quotation !== '' && (
              <Resultado>
                <span>{`Cotação:  ${quotation}`}</span>
                <span>{`Resultado: $${dolar}`}</span>
              </Resultado>
            )
          }
      </Center>
    </Container>
  );
}
