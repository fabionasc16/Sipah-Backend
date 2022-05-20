import { Router } from 'express';

import { pacientesRoutes } from '@shared/infra/http/routes/cadastros/Pacientes.routes';
import { biotipoRoutes } from '@shared/infra/http/routes/caracteristicas/Biotipo.routes';
import { corCabeloRoutes } from '@shared/infra/http/routes/caracteristicas/CorCabelo.routes';
import { corteCabeloRoutes } from '@shared/infra/http/routes/caracteristicas/CorteCabelo.routes';
import { racaEtniaRoutes } from '@shared/infra/http/routes/caracteristicas/RacaEtnia.routes';
import { tipoCabeloRoutes } from '@shared/infra/http/routes/caracteristicas/TipoCabelo.routes';
import { usuarioRoutes } from '@shared/infra/http/routes/usuario/Usuario.routes';

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

appRoutes.use('/pacientes', pacientesRoutes);
appRoutes.use('/corcabelo', corCabeloRoutes);
appRoutes.use('/cortecabelo', corteCabeloRoutes);
appRoutes.use('/tipocabelo', tipoCabeloRoutes);
appRoutes.use('/biotipo', biotipoRoutes);
appRoutes.use('/racaetnia', racaEtniaRoutes);

// * -------------------- Rotas de Sistema - Usuario --------------------

appRoutes.use('/usuario', usuarioRoutes);

export { appRoutes };
