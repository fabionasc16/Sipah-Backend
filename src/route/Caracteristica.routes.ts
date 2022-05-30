import { CaracteristicaController } from '../controller/Caracteristica.Controller';
import { Router } from 'express';

const caracteristicaRoutes = Router();

const caracteristicaController = new CaracteristicaController();

caracteristicaRoutes.post('/', caracteristicaController.create);

caracteristicaRoutes.get('/', caracteristicaController.list);

caracteristicaRoutes.delete('/:id', caracteristicaController.delete);

caracteristicaRoutes.get('/:id', caracteristicaController.listById);

caracteristicaRoutes.put('/:id', caracteristicaController.update);

export { caracteristicaRoutes };
