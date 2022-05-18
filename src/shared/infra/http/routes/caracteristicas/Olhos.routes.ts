import { CreateOlhosController } from '@modules/caracteristicasPaciente/corOlhos/useCases/createCorOlhos/CreateOlhosController';
import { DeleteOLhosController } from '@modules/caracteristicasPaciente/corOlhos/useCases/deleteCorOlhos/DeleteOlhosController';
import { ListOlhosController } from '@modules/caracteristicasPaciente/corOlhos/useCases/listCorOlhos/ListOlhosController';
import { ListOlhosByIdController } from '@modules/caracteristicasPaciente/corOlhos/useCases/listCorOlhosById/ListOlhosByIdController';
import { UpdateCorOlhosController } from '@modules/caracteristicasPaciente/corOlhos/useCases/updateCorOlhos/UpdateOlhosController';
import { Router } from 'express';

const corolhosRoutes = Router();

const createcorolhosController = new CreateOlhosController();

const deletecorolhosController = new DeleteOLhosController();

const listcorolhosController = new ListOlhosController();

const updatecorolhosController = new UpdateCorOlhosController();

const listcorolhosByIdController = new ListOlhosByIdController();

corolhosRoutes.post('/', createcorolhosController.handle);

corolhosRoutes.get('/', listcorolhosController.handle);

corolhosRoutes.get('/:id', listcorolhosByIdController.handle);

corolhosRoutes.put('/:id', updatecorolhosController.handle);

corolhosRoutes.delete('/:id', deletecorolhosController.handle);

export { corolhosRoutes };
