import { CreateUsuarioController } from '@modules/usuario/CreateUsuarioController';
import { DeleteUsuarioController } from '@modules/usuario/DeleteUsuarioController';
import { ListAllUsuarioController } from '@modules/usuario/ListAllUsuarioController';
import { ListUsuarioByCPFController } from '@modules/usuario/ListUsuarioByCPFController';
import { ListUsuarioByIdController } from '@modules/usuario/ListUsuarioByIdController';
import { UpdateUsuarioController } from '@modules/usuario/UpdateUsuarioController';
import { UsuarioController } from 'controller/usuario.controller';
import { Router } from 'express';

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuarioByCPFController = new ListUsuarioByCPFController();
const listAllUsuarioController = new ListAllUsuarioController();
const usuarioController = new UsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const listUsuarioByIdController = new ListUsuarioByIdController();

usuarioRoutes.post('/', usuarioController.createUsuario);

usuarioRoutes.get('/', usuarioController.listAllUsuario);

usuarioRoutes.get('/:id', usuarioController.listUsuarioById);

usuarioRoutes.get('/cpf/query', usuarioController.listUsuarioByCPF);

usuarioRoutes.delete('/:id', usuarioController.deleteUsuario);

usuarioRoutes.put('/:id', usuarioController.updateUsuario);

export { usuarioRoutes };
