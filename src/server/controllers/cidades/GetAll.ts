import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().notRequired().moreThan(0).nonNullable(),
      limit: yup.number().notRequired().moreThan(0).nonNullable(),
      filter: yup.string().notRequired().nonNullable(),
    }),
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  console.log(req.query);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Em construção!');
};
