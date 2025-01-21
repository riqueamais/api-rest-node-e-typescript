import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Cidades - DeleteById', () => {
  it('Deletando registro', async () => {
    const response = await testServer.post('/cidades').send({
      nome: 'Santos',
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);

    const deleteResponse = await testServer.delete(`/cidades/${response.body}`).send();

    expect(deleteResponse.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Tentando deletar Registro que não existe', async () => {
    const response = await testServer.delete('/cidades/99999').send();

    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
