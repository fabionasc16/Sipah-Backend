import { CreateUsuarioController } from '@modules/usuario/useCases/createUsuario/CreateUsuarioController';
import { Router } from 'express';

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();

usuarioRoutes.post('/', createUsuarioController.handle);

export { usuarioRoutes };
