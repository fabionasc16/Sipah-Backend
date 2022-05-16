import { CreateOlhosController } from '@modules/CorOlhos/useCases/createCorOlhos/CreateOlhosController';
import { DeleteOLhosController } from '@modules/CorOlhos/useCases/deleteCorOlhos/DeleteOlhosController';
import { ListOlhosController } from '@modules/CorOlhos/useCases/listCorOlhos/ListOlhosController';
import { ListOlhosByIdController } from '@modules/CorOlhos/useCases/listCorOlhosById/ListOlhosByIdController';
import { UpdateCorOlhosController } from '@modules/CorOlhos/useCases/updateCorOlhos/UpdateOlhosController';
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
