import { CreateTipoCabeloController } from '@modules/tipoCabelo/useCases/createTipoCabelo/CreateTipoCabeloController';
import { DeleteTipoCabeloController } from '@modules/tipoCabelo/useCases/deleteTipoCabelo/DeleteTipoCabeloController';
import { ListAllTipoCabeloController } from '@modules/tipoCabelo/useCases/listAllTipoCabelo/ListAllTipoCabeloController';
import { ListTipoCabeloByIdController } from '@modules/tipoCabelo/useCases/listTipoCabeloById/ListTipoCabeloByIdController';
import { UpdateTipoCabeloController } from '@modules/tipoCabelo/useCases/updateTipoCabelo/UpdateTipoCabeloController';
import { Router } from 'express';

const tipoCabeloRoutes = Router();

const createTipoCabeloController = new CreateTipoCabeloController();
const deleteTipoCabeloController = new DeleteTipoCabeloController();
const listAllTipoCabeloController = new ListAllTipoCabeloController();
const listTipoCabeloByIdController = new ListTipoCabeloByIdController();
const updateTipoCabeloController = new UpdateTipoCabeloController();

tipoCabeloRoutes.post('/', createTipoCabeloController.handle);
tipoCabeloRoutes.delete('/:id', deleteTipoCabeloController.handle);
tipoCabeloRoutes.get('/', listAllTipoCabeloController.handle);
tipoCabeloRoutes.get('/:id', listTipoCabeloByIdController.handle);
tipoCabeloRoutes.put('/:id', updateTipoCabeloController.handle);

export { tipoCabeloRoutes };
