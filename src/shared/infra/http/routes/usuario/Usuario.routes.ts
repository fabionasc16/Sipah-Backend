import { CreateUsuarioController } from '@modules/usuario/useCases/createUsuario/CreateUsuarioController';
import { ListAllUsuarioController } from '@modules/usuario/useCases/listAllUsuario/ListAllUsuarioController';
import { ListUsuarioByCPFController } from '@modules/usuario/useCases/listUsuarioByCPF/ListUsuarioByCPFController';
import { Router } from 'express';

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuarioByCPFController = new ListUsuarioByCPFController();
const listAllUsuarioController = new ListAllUsuarioController();

usuarioRoutes.post('/', createUsuarioController.handle);

usuarioRoutes.get('/', listAllUsuarioController.handle);

usuarioRoutes.get('/cpf/query', listUsuarioByCPFController.handle);

export { usuarioRoutes };
