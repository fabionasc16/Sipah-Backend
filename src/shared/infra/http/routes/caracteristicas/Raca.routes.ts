import { CreateRacaController } from '@modules/Raca/useCases/createRaca/CreateRacaController';
import { DeleteRacaController } from '@modules/Raca/useCases/deleteRaca/DeleteRacaController';
import { ListRacaController } from '@modules/Raca/useCases/listRaca/ListRacaController';
import { ListRacaByIdController } from '@modules/Raca/useCases/listRacaById/ListRacaByIdController';
import { UpdateRacaController } from '@modules/Raca/useCases/updateRaca/UpdateRacaController';
import { Router } from 'express';

const racaRoutes = Router();

const createracaController = new CreateRacaController();
const deleteracaController = new DeleteRacaController();
const listracaController = new ListRacaController();
const listracaByIdController = new ListRacaByIdController();
const updateracaController = new UpdateRacaController();

racaRoutes.post('/', createracaController.handle);
racaRoutes.delete('/:id', deleteracaController.handle);
racaRoutes.get('/', listracaController.handle);
racaRoutes.get('/:id', listracaByIdController.handle);
racaRoutes.put('/:id', updateracaController.handle);

export { racaRoutes };
