import { Router } from 'express';

import { AppError } from '@shared/errors/AppError';
import { corCabeloRoutes } from '@shared/infra/http/routes/CorCabelo.routes';
import { corteCabeloRoutes } from '@shared/infra/http/routes/CorteCabelo.routes';
import { tipoCabeloRoutes } from '@shared/infra/http/routes/TipoCabelo.routes';

const appRoutes = Router();

appRoutes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

appRoutes.use('/corCabelo', corCabeloRoutes);

appRoutes.use('/corteCabelo', corteCabeloRoutes);

appRoutes.use('/tipoCabelo', tipoCabeloRoutes);

appRoutes.get('*', (request, response) => {
  throw new AppError('A rota informada não existe.', 404);
});

export { appRoutes };
