import { CreateCorteCabeloController } from '@modules/caracteristicasPaciente/corteCabelo/useCases/createCorteCabelo/CreateCorteCabeloController';
import { DeleteCorteCabeloController } from '@modules/caracteristicasPaciente/corteCabelo/useCases/deleteCorteCabelo/DeleteCorteCabeloController';
import { ListAllCorteCabeloController } from '@modules/caracteristicasPaciente/corteCabelo/useCases/listAllCorteCabelo/ListAllCorteCabeloController';
import { ListCorteCabeloByIdController } from '@modules/caracteristicasPaciente/corteCabelo/useCases/listCorteCabeloById/ListCorteCabeloByIdController';
import { UpdateCorteCabeloController } from '@modules/caracteristicasPaciente/corteCabelo/useCases/updateCorteCabelo/UpdateCorteCabeloController';
import { Router } from 'express';

const corteCabeloRoutes = Router();

const createCorteCabeloController = new CreateCorteCabeloController();

const deleteCorteCabeloController = new DeleteCorteCabeloController();

const listAllCorteCabeloController = new ListAllCorteCabeloController();

const updateCorteCabeloController = new UpdateCorteCabeloController();

const listCorteCabeloByIdController = new ListCorteCabeloByIdController();

corteCabeloRoutes.post('/', createCorteCabeloController.handle);

corteCabeloRoutes.get('/', listAllCorteCabeloController.handle);

corteCabeloRoutes.get('/:id', listCorteCabeloByIdController.handle);

corteCabeloRoutes.put('/:id', updateCorteCabeloController.handle);

corteCabeloRoutes.delete('/:id', deleteCorteCabeloController.handle);

export { corteCabeloRoutes };
