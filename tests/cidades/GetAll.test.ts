import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Cidades - GetAll', () => {
  it('Buscando todos os registros', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'Santos',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);

    const searchedResponse = await testServer.get('/cidades').send();

    expect(Number(searchedResponse.header['x-total-count'])).toBeGreaterThan(0);
    expect(searchedResponse.statusCode).toEqual(StatusCodes.OK);
    expect(searchedResponse.body.length).toBeGreaterThan(0);
  });
});
