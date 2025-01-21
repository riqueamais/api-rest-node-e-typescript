import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Cidades - Create', () => {
    it('Criando registro', async () => {
      const response = await testServer.post('/cidades').send({
        nome: 'Santos',
      });

      expect(response.statusCode).toEqual(StatusCodes.CREATED)
      expect(typeof response.body).toEqual('number');
    });
})