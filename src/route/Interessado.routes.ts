import { InteressadoController } from 'controller/Interessados.Controller';
import { Router } from 'express';
import { AuthService } from 'service/auth.service';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';


const interessadoRoutes = Router();

const interessadoController = new InteressadoController();


interessadoRoutes.post('/',checkJWT, checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]), interessadoController.createInteressado);

interessadoRoutes.get('/',checkJWT, checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]), interessadoController.listAllInteressado);

interessadoRoutes.get('/detalhes/:id',checkJWT, checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]), interessadoController.listInteressadoById);

interessadoRoutes.get('/cpf/:cpf',checkJWT, checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]), interessadoController.listInteressadoByCPF);

interessadoRoutes.delete('/:id',checkJWT, checkRole([ AuthService.ROLES.ADMIN]), interessadoController.deleteInteressado);

interessadoRoutes.put('/:id', checkJWT, checkRole([AuthService.ROLES.ATENDIMENTO, AuthService.ROLES.ADMIN]), interessadoController.updateInteressado);



//interessadoRoutes.put('/mudar/status/:id', interessadoController.mudarStatus);

export { interessadoRoutes };
