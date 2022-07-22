import { UnidadeSaudeController } from 'controller/unidadeSaude.controller';
import { UsuarioController } from 'controller/usuario.controller';
import { Router } from 'express';

const unidadeSaudeRoutes = Router();

const unidadeSaudeController = new UnidadeSaudeController();

unidadeSaudeRoutes.get('/', unidadeSaudeController.list);

export { unidadeSaudeRoutes };
