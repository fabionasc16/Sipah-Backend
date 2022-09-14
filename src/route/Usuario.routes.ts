import { Router } from 'express';

import { UsuarioController } from '../controller/usuario.controller';
import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';
import { AuthService } from '../service/auth.service';

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();
const authService = new AuthService();

usuarioRoutes.post(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.USUARIO]),
  authService.createUsuario,
);

usuarioRoutes.get('/', authService.listAllUsuario);

usuarioRoutes.get('/detalhes/:id', authService.listUsuarioById);

usuarioRoutes.get('/cpf/:cpf', authService.listUsuarioByCPF);

usuarioRoutes.delete(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.USUARIO_EXCLUIR]),
  authService.deleteUsuario,
);

usuarioRoutes.put('/:id', authService.updateUsuario);

usuarioRoutes.put('/mudar/status/:id', authService.mudarStatusUsuario);

export { usuarioRoutes };
