import { BuscaController } from '../controller/Busca.Controller';
import { Router } from 'express';

const buscaRoutes = Router();

const buscaController = new BuscaController();


buscaRoutes.post('/', buscaController.createBusca);

buscaRoutes.get('/', buscaController.listAllBusca);

buscaRoutes.get('/interessado/:Interessado', buscaController.listBuscaByInteressado);

buscaRoutes.get('/:Paciente', buscaController.listBuscaByPaciente);

export { buscaRoutes };
