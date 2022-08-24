import { UnidadeController } from 'controller/unidade.controller';
import { Router } from 'express';
import { checkJWT } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';
import { AuthService } from 'service/auth.service';

const unidadeRoutes = Router();

const unidadeController = new UnidadeController();

unidadeRoutes.post(
  '/create',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.create,
);
unidadeRoutes.get(
  '/list',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.list,
);
unidadeRoutes.get(
  '/listid/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.listById,
);
unidadeRoutes.get(
  '/listcnpj/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.listByCNPJ,
);
unidadeRoutes.put(
  '/update/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.update,
);
unidadeRoutes.delete(
  '/delete/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN]),
  unidadeController.delete,
);

export { unidadeRoutes };
