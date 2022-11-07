import { Router } from 'express';

import { CaracteristicaController } from '../controller/Caracteristica.Controller';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';
import { AuthService } from '../service/auth.service';

const caracteristicaRoutes = Router();

const caracteristicaController = new CaracteristicaController();

caracteristicaRoutes.post(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]),
  caracteristicaController.create,
);

caracteristicaRoutes.get(
  '/',
  checkJWT,
  checkRole([
    AuthService.ROLES.ADMIN,
    AuthService.ROLES.CARACTERISTICA,
    AuthService.ROLES.PACIENTE_VISUALIZAR_FICHA_SOCIAL,
  ]),
  caracteristicaController.list,
);

caracteristicaRoutes.get(
  '/:name',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]),
  caracteristicaController.listByCaracteristica,
);

caracteristicaRoutes.delete(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]),
  caracteristicaController.delete,
);

caracteristicaRoutes.get(
  '/id/:id',
  checkJWT,
  checkRole([
    AuthService.ROLES.ADMIN,
    AuthService.ROLES.CARACTERISTICA,
    AuthService.ROLES.PACIENTE_VISUALIZAR_FICHA_SOCIAL,
  ]),
  caracteristicaController.listById,
);

caracteristicaRoutes.put(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]),
  caracteristicaController.update,
);

export { caracteristicaRoutes };
