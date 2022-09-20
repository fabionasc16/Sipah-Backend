import { BuscaController } from '../controller/Busca.Controller';
import { Router } from 'express';
import { AuthService } from '../service/auth.service';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';

const buscaRoutes = Router();

const buscaController = new BuscaController();


buscaRoutes.post('/',checkJWT, checkRole([AuthService.ROLES.ADMIN]), buscaController.createBusca);

buscaRoutes.get('/',checkJWT, checkRole([AuthService.ROLES.ADMIN]), buscaController.listAllBusca);

buscaRoutes.get('/interessado/:Interessado',checkJWT, checkRole([AuthService.ROLES.ADMIN]), buscaController.listBuscaByInteressado);

buscaRoutes.get('/:Paciente',checkJWT, checkRole([AuthService.ROLES.ADMIN]), buscaController.listBuscaByPaciente);

export { buscaRoutes };
