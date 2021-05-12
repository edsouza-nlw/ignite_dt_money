import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WEB</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>25/04/2021</td>
          </tr>
          <tr>
            <td>Médico</td>
            <td className="withdraw">-R$ 1.000,00</td>
            <td>Cuidados com a Saúde</td>
            <td>05/05/2021</td>
          </tr>
          <tr>
            <td>Internet JubaLiba</td>
            <td className="withdraw">-R$ 120,00</td>
            <td>Infra Estrutura</td>
            <td>26/05/2021</td>
          </tr>
          <tr>
            <td>Placa Mãe</td>
            <td className="withdraw">-R$ 660,00</td>
            <td>Manutenção de Equipamentos</td>
            <td>27/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
