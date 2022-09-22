import { Router } from 'express';
import { AuthService } from '../service/auth.service';

import { checkJWT } from '../middleware/checkJWT';
import { checkRole } from '../middleware/checkRole';

const usuarioRoutes = Router();

const authService = new AuthService();

usuarioRoutes.post(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.USUARIO]),
  authService.createUsuario,
);

usuarioRoutes.get(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.USUARIO, AuthService.ROLES.ADMIN]),
  authService.listAllUsuario,
);

usuarioRoutes.get('/detalhes/:id', checkJWT,
  checkRole([AuthService.ROLES.USUARIO, AuthService.ROLES.ADMIN]), authService.listUsuarioById);

usuarioRoutes.get('/cpf/:cpf', checkJWT,
  checkRole([AuthService.ROLES.USUARIO, AuthService.ROLES.ADMIN]), authService.listUsuarioByCPF);

usuarioRoutes.delete(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.USUARIO_EXCLUIR, AuthService.ROLES.ADMIN]),
  authService.deleteUsuario,
);

usuarioRoutes.put('/:id', checkJWT,
  checkRole([AuthService.ROLES.USUARIO, AuthService.ROLES.ADMIN]), authService.updateUsuario);

// Pode-se usar o método update para mudar o status do usuário
// usuarioRoutes.put('/mudar/status/:id', authService.mudarStatusUsuario);

export { usuarioRoutes };
