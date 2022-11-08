import { Router } from 'express';

import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';
import { AuthService } from '../service/auth.service';

const unidadeRoutes = Router();

const authService = new AuthService();

unidadeRoutes.post(
  '/create',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  authService.createUnities,
);
unidadeRoutes.get(
  '/list',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  authService.listUnities,
);
unidadeRoutes.get(
  '/listid/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  authService.listByIdUnities,
);
unidadeRoutes.get(
  '/listcnpj/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  authService.listByCNPJUnities,
);
unidadeRoutes.put(
  '/update/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  authService.updateUnities,
);
unidadeRoutes.delete(
  '/delete/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  authService.deleteUnities,
);

export { unidadeRoutes };
