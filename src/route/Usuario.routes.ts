import { UsuarioController } from 'controller/usuario.controller';
import { Router } from 'express';

const usuarioRoutes = Router();

const usuarioController = new UsuarioController();


usuarioRoutes.post('/', usuarioController.createUsuario);

usuarioRoutes.get('/', usuarioController.listAllUsuario);

usuarioRoutes.get('/detalhes/:id', usuarioController.listUsuarioById);

usuarioRoutes.get('/cpf/:cpf', usuarioController.listUsuarioByCPF);

usuarioRoutes.delete('/:id', usuarioController.deleteUsuario);

usuarioRoutes.put('/:id', usuarioController.updateUsuario);

export { usuarioRoutes };
