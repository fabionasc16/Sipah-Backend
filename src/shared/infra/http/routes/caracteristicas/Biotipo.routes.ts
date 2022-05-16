import { CreateBiotipoController } from '@modules/Biotipo/useCases/createBiotipo/CreateBiotipoController';
import { DeleteBiotipoController } from '@modules/Biotipo/useCases/deleteBiotipo/DeleteBiotipoController';
import { ListBiotipoController } from '@modules/Biotipo/useCases/listBiotipo/ListBiotipoController';
import { ListBiotipoByIdController } from '@modules/Biotipo/useCases/listBiotipoById/ListBiotipoByIdController';
import { UpdateBiotipoController } from '@modules/Biotipo/useCases/updateBiotipo/UpdateBiotipoController';
import { Router } from 'express';

const biotipoRoutes = Router();

const createbiotipoController = new CreateBiotipoController();
const listbiotipoController = new ListBiotipoController();
const listbiotipoByIdController = new ListBiotipoByIdController();
const updatebiotipoController = new UpdateBiotipoController();
const deletebiotipoController = new DeleteBiotipoController();

biotipoRoutes.post('/', createbiotipoController.handle);
biotipoRoutes.get('/', listbiotipoController.handle);
biotipoRoutes.get('/:id', listbiotipoByIdController.handle);
biotipoRoutes.put('/:id', updatebiotipoController.handle);
biotipoRoutes.delete('/:id', deletebiotipoController.handle);

export { biotipoRoutes };
