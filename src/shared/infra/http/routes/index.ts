import { Router } from 'express';

import { AppError } from '@shared/errors/AppError';

const appRoutes = Router();

appRoutes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

appRoutes.get('*', (request, response) => {
  throw new AppError('A rota informada não existe.', 404);
});

export { appRoutes };
