import { CreateUsuarioController } from '@modules/usuario/useCases/createUsuario/CreateUsuarioController';
import { DeleteUsuarioController } from '@modules/usuario/useCases/deleteUsuario/DeleteUsuarioController';
import { ListAllUsuarioController } from '@modules/usuario/useCases/listAllUsuario/ListAllUsuarioController';
import { ListUsuarioByCPFController } from '@modules/usuario/useCases/listUsuarioByCPF/ListUsuarioByCPFController';
import { ListUsuarioByIdController } from '@modules/usuario/useCases/listUsuarioById/ListUsuarioByIdController';
import { UpdateUsuarioController } from '@modules/usuario/useCases/updateUsuario/UpdateUsuarioController';
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
