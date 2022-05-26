import { CreateUsuarioController } from '@modules/usuario/CreateUsuarioController';
import { DeleteUsuarioController } from '@modules/usuario/DeleteUsuarioController';
import { ListAllUsuarioController } from '@modules/usuario/ListAllUsuarioController';
import { ListUsuarioByCPFController } from '@modules/usuario/ListUsuarioByCPFController';
import { ListUsuarioByIdController } from '@modules/usuario/ListUsuarioByIdController';
import { UpdateUsuarioController } from '@modules/usuario/UpdateUsuarioController';
import { Router } from 'express';

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuarioByCPFController = new ListUsuarioByCPFController();
const listAllUsuarioController = new ListAllUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const listUsuarioByIdController = new ListUsuarioByIdController();

usuarioRoutes.post('/', createUsuarioController.handle);

usuarioRoutes.get('/', listAllUsuarioController.handle);

usuarioRoutes.get('/:id', listUsuarioByIdController.handle);

usuarioRoutes.get('/cpf/query', listUsuarioByCPFController.handle);

usuarioRoutes.delete('/:id', deleteUsuarioController.handle);

usuarioRoutes.put('/:id', updateUsuarioController.handle);

export { usuarioRoutes };
