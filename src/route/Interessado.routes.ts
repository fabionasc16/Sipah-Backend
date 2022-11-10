import { Router } from 'express';

import { InteressadoController } from '../controller/Interessados.Controller';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';
import { AuthService } from '../service/auth.service';

const interessadoRoutes = Router();

const interessadoController = new InteressadoController();

interessadoRoutes.post(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]),
  interessadoController.createInteressado,
);

interessadoRoutes.get(
  '/',
  checkJWT,
  checkRole([
    AuthService.ROLES.ATENDIMENTO,
    AuthService.ROLES.ADMIN,
    AuthService.ROLES.PACIENTE_VISUALIZAR_FICHA_SOCIAL,
  ]),
  interessadoController.listAllInteressado,
);

interessadoRoutes.get(
  '/detalhes/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]),
  interessadoController.listInteressadoById,
);

interessadoRoutes.get(
  '/cpf/:cpf',
  checkJWT,
  checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]),
  interessadoController.listInteressadoByCPF,
);

interessadoRoutes.delete(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.ATENDIMENTO]),
  interessadoController.deleteInteressado,
);

interessadoRoutes.put(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]),
  interessadoController.updateInteressado,
);

// interessadoRoutes.put('/mudar/status/:id', interessadoController.mudarStatus);

export { interessadoRoutes };
