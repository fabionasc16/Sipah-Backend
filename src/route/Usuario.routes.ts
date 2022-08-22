import { UsuarioController } from 'controller/usuario.controller';
import { Router } from 'express';
import { AuthService } from 'service/auth.service';
import { checkJWT } from '../middleware/checkJwt';
import { checkRole } from '../middleware/checkRole';
const usuarioRoutes = Router();

const usuarioController = new UsuarioController();


usuarioRoutes.post('/',checkJWT, checkRole([AuthService.ROLES.USUARIO]), usuarioController.createUsuario);

usuarioRoutes.get('/', usuarioController.listAllUsuario);

usuarioRoutes.get('/detalhes/:id', usuarioController.listUsuarioById);

usuarioRoutes.get('/cpf/:cpf', usuarioController.listUsuarioByCPF);

usuarioRoutes.delete('/:id',checkJWT, checkRole([AuthService.ROLES.USUARIO_EXCLUIR]), usuarioController.deleteUsuario);

usuarioRoutes.put('/:id', usuarioController.updateUsuario);

usuarioRoutes.put('/mudar/status/:id', usuarioController.mudarStatus);

export { usuarioRoutes };
