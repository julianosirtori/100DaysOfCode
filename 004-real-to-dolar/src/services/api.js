import axios from 'axios';
import { format } from 'date-fns';

const api = axios.create(
  {
    baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata',
  },
);

export default api;

export function getQuotation(data) {
  const dataFormated = format(data, 'MM-dd-yyyy');
  return api.get(`/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dataFormated}'&$top=100&$format=json`);
}

export function getQuotationNow() {
  const dataFormated = format(new Date(), 'MM-dd-yyyy');
  return api.get(`/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dataFormated}'&$top=100&$format=json`);
}
