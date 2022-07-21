import { InteressadoController } from 'controller/Interessados.Controller';
import { Router } from 'express';

const interessadoRoutes = Router();

const interessadoController = new InteressadoController();


interessadoRoutes.post('/', interessadoController.createInteressado);

interessadoRoutes.get('/', interessadoController.listAllInteressado);

interessadoRoutes.get('/detalhes/:id', interessadoController.listInteressadoById);

interessadoRoutes.get('/cpf/:cpf', interessadoController.listInteressadoByCPF);

interessadoRoutes.delete('/:id', interessadoController.deleteInteressado);

interessadoRoutes.put('/:id', interessadoController.updateInteressado);

interessadoRoutes.post('/:id', interessadoController.updateInteressado);



//interessadoRoutes.put('/mudar/status/:id', interessadoController.mudarStatus);

export { interessadoRoutes };
