import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Cidades - UpdateById', () => {
  it('Atualizando registro', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'Santos',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);

    const updateResponse = await testServer
      .put(`/cidades/${response.body}`)
      .send({
        nome: 'São Vicente',
      });

    expect(updateResponse.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Atualizando registro que não existe', async () => {
    const response = await testServer.put('/cidades/99999').send({
      nome: 'Santos',
    });

    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
