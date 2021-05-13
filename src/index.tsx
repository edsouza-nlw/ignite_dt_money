import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Venda de site',
          amount: 1300,
          type: 'deposit',
          category: 'Venda',
          createdAt: new Date('2021-02-22 14:00:00'),
        },
        {
          id: 2,
          title: 'Mais Teste fixo do seed',
          amount: 850,
          type: 'withdraw',
          category: 'Luz',
          createdAt: new Date('2021-02-12 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
