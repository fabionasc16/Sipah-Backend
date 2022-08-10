import { Router } from 'express';

import { caracteristicaRoutes } from './Caracteristica.routes';
import { pacientesRoutes } from './paciente.route';
import { tipoCaracteristicaRoutes } from './TipoCaracteristica.routes';
import { usuarioRoutes } from './Usuario.routes';
import { interessadoRoutes } from './Interessado.routes';
import { buscaRoutes } from './busca.routes';


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

appRoutes.use('/usuario', usuarioRoutes);

appRoutes.use('/paciente', pacientesRoutes);

appRoutes.use('/interessado', interessadoRoutes);

appRoutes.use('/busca', buscaRoutes);

// * -------------------- Rotas de Sistema - Usuario --------------------

appRoutes.use('/caracteristica', caracteristicaRoutes);

appRoutes.use('/tipocaracteristica', tipoCaracteristicaRoutes);


export { appRoutes };