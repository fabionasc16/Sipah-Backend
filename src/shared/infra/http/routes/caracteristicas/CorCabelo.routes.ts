import { CreateCorCabeloController } from '@modules/corCabelo/useCases/createCorCabelo/CreateCorCabeloController';
import { DeleteCorCabeloController } from '@modules/corCabelo/useCases/deleteCorCabelo/DeleteCorCabeloController';
import { ListAllCorCabeloController } from '@modules/corCabelo/useCases/listAllCorCabelo/ListAllCorCabeloController';
import { ListCorCabeloByIdController } from '@modules/corCabelo/useCases/listCorCabeloById/ListCorCabeloByIdController';
import { UpdateCorCabeloController } from '@modules/corCabelo/useCases/updateCorCabelo/UpdateCorCabeloController';
import { Router } from 'express';

const corCabeloRoutes = Router();

const createCorCabeloController = new CreateCorCabeloController();
const listAllCorCabeloController = new ListAllCorCabeloController();
const listCorCabeloByIdController = new ListCorCabeloByIdController();
const updateCorCabeloController = new UpdateCorCabeloController();
const deleteCorCabeloController = new DeleteCorCabeloController();

corCabeloRoutes.post('/', createCorCabeloController.handle);
corCabeloRoutes.get('/', listAllCorCabeloController.handle);
corCabeloRoutes.get('/:id', listCorCabeloByIdController.handle);
corCabeloRoutes.put('/:id', updateCorCabeloController.handle);
corCabeloRoutes.delete('/:id', deleteCorCabeloController.handle);

export { corCabeloRoutes };
