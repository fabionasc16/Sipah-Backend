import { BuscaController } from 'controller/Busca.Controller';
import { Router } from 'express';

const buscaRoutes = Router();

const buscaController = new BuscaController();


buscaRoutes.post('/', buscaController.createBusca);

buscaRoutes.get('/', buscaController.listAllBusca);

buscaRoutes.get('/detalhes/:id', buscaController.listBuscaById);

buscaRoutes.get('/cpf/:cpf', buscaController.listBuscaByCPF);

buscaRoutes.get('/:idInteressado', buscaController.listBuscaByIdInteressado);

buscaRoutes.get('/:idPaciente', buscaController.listBuscaByIdPaciente);



//interessadoRoutes.put('/mudar/status/:id', interessadoController.mudarStatus);

export { buscaRoutes };
