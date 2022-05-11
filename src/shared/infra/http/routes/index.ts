import { Router } from 'express';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

import { pacientesRoutes } from './cadastros/Pacientes.routes';

const appRoutes = Router();

// ! -------------------- Rota principal do Sistema ----------------------
appRoutes.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.format({
    'text/plain': () => response.send('API - Projeto Ticados v1 - SES-AM'),
    'text/html': () =>
      response.send('<h1>API - Projeto Ticados v1 - SES-AM</h1>'),
    'application/json': () =>
      response.send({ message: 'Aloha application/json' }),
    default: () => response.status(406).send('Not acceptable'),
  });
});

// * -------------------- Rotas de Sistema - Pacientes --------------------
appRoutes.use('/pacientes', pacientesRoutes);

export { appRoutes };
