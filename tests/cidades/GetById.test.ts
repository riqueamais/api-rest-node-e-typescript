import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Cidades - GetById', () => {
  it('Buscando Registro', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'Santos',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);

    const searchedResponse = await testServer
      .get(`/cidades/${response.body}`)
      .send();

    expect(searchedResponse.statusCode).toEqual(StatusCodes.OK);
    expect(searchedResponse.body).toHaveProperty('nome');
  });

  it('Buscando registro que não existe', async () => {
    const response = await testServer.get('/cidades/99999').send();

    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
