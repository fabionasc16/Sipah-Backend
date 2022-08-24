import { UsuarioController } from 'controller/usuario.controller';
import { Router } from 'express';
import { AuthService } from 'service/auth.service';

import { checkJWT } from '../middleware/checkJwt';
import { checkRole } from '../middleware/checkRole';

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.post(
  '/',
  checkJWT,
  checkRole([
    AuthService.ROLES.ADMIN,
    AuthService.ROLES.ATENDIMENTO,
    AuthService.ROLES.USUARIO,
  ]),
  usuarioController.createUsuario,
);

usuarioRoutes.get(
  '/',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  usuarioController.listAllUsuario,
);

usuarioRoutes.get(
  '/detalhes/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  usuarioController.listUsuarioById,
);

usuarioRoutes.get(
  '/cpf/:cpf',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  usuarioController.listUsuarioByCPF,
);

usuarioRoutes.delete(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO_EXCLUIR]),
  usuarioController.deleteUsuario,
);

usuarioRoutes.put(
  '/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  usuarioController.updateUsuario,
);

usuarioRoutes.put(
  '/mudar/status/:id',
  checkJWT,
  checkRole([AuthService.ROLES.ADMIN, AuthService.ROLES.USUARIO]),
  usuarioController.mudarStatus,
);

export { usuarioRoutes };
