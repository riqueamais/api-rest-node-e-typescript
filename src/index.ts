import { app } from './server';

app.listen(process.env.PORT || 3333, () =>
  console.log(`app rodando! na porta ${process.env.PORT || 3333}`),
);
