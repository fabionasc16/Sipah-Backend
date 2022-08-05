import { InteressadoController } from 'controller/Interessados.Controller';
import { Router } from 'express';

const interessadoRoutes = Router();

const interessadoController = new InteressadoController();


interessadoRoutes.post('/', interessadoController.createInteressado);

interessadoRoutes.get('/', interessadoController.listAllInteressado);

interessadoRoutes.get('/detalhes/:id', interessadoController.listInteressadoById);

interessadoRoutes.get('/cpf/:cpf', interessadoController.listInteressadoByCPF);

interessadoRoutes.get('/id/:idExterno', interessadoController.listInteressadoByIdExterno);

interessadoRoutes.delete('/:id', interessadoController.deleteInteressado);

interessadoRoutes.put('/:id', interessadoController.updateInteressado);

interessadoRoutes.post('/:id', interessadoController.createIdPaciente);



//interessadoRoutes.put('/mudar/status/:id', interessadoController.mudarStatus);

export { interessadoRoutes };
