import { CaracteristicaController } from '../controller/Caracteristica.Controller';
import { Router } from 'express';
import { AuthService } from '../service/auth.service';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';

const caracteristicaRoutes = Router();

const caracteristicaController = new CaracteristicaController();

caracteristicaRoutes.post('/', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.create);

caracteristicaRoutes.get('/', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.list);

caracteristicaRoutes.get('/:name', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.listByCaracteristica);

caracteristicaRoutes.delete('/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.delete);

caracteristicaRoutes.get('/id/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.listById);

caracteristicaRoutes.put('/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), caracteristicaController.update);

export { caracteristicaRoutes };
