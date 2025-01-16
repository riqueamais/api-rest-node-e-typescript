import { Router } from 'express';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  res.send('ola');
});

router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create,
);

export { router };
