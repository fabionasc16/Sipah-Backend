import { CreateCaracteristicaController } from '@modules/caracteristica/CreateCaracteristicaController';
import { ListAllCaracteristicaController } from '@modules/caracteristica/ListAllCaracteristicaController';
import { Router } from 'express';

const caracteristicaRoutes = Router();

const createCaracteristicaController = new CreateCaracteristicaController();
const listAllCaracteristicaController = new ListAllCaracteristicaController();

caracteristicaRoutes.post('/', createCaracteristicaController.handle);

caracteristicaRoutes.get('/', listAllCaracteristicaController.handle);

caracteristicaRoutes.delete('/:id', createCaracteristicaController.handle);

caracteristicaRoutes.get('/:id', createCaracteristicaController.handle);

caracteristicaRoutes.put('/:id', createCaracteristicaController.handle);

export { caracteristicaRoutes };
