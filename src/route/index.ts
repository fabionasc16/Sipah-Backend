import { Router } from 'express';
import { pacientesRoutes } from 'route/Pacientes.routes';
import { usuarioRoutes } from 'route/Usuario.routes';

import { caracteristicaRoutes } from './Caracteristica.routes';
import { tipoCaracteristicaRoutes } from './TipoCaracteristica.routes';

const appRoutes = Router();

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

appRoutes.use('/paciente', pacientesRoutes);

// * -------------------- Rotas de Sistema - Usuario --------------------

appRoutes.use('/usuario', usuarioRoutes);

appRoutes.use('/caracteristica', caracteristicaRoutes);

appRoutes.use('/tipocaracteristica', tipoCaracteristicaRoutes);

export { appRoutes };
