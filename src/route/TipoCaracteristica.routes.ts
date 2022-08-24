import { TipoCaracteristicaController } from "../controller/TipoCaracteristica.Controller";
import { Router } from 'express';
import { AuthService } from 'service/auth.service';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';

const tipoCaracteristicaRoutes = Router();

const tipoCaracteristicaController =  new TipoCaracteristicaController();

tipoCaracteristicaRoutes.post('/', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), tipoCaracteristicaController.create);

tipoCaracteristicaRoutes.delete('/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), tipoCaracteristicaController.delete);

tipoCaracteristicaRoutes.get('/', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), tipoCaracteristicaController.list);

tipoCaracteristicaRoutes.get('/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), tipoCaracteristicaController.listById);

tipoCaracteristicaRoutes.put('/:id', checkJWT, checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.CARACTERISTICA]), tipoCaracteristicaController.update);

export { tipoCaracteristicaRoutes };
