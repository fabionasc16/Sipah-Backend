import { CreateRacaController } from '@modules/caracteristicasPaciente/raca/useCases/createRaca/CreateRacaController';
import { DeleteRacaController } from '@modules/caracteristicasPaciente/raca/useCases/deleteRaca/DeleteRacaController';
import { ListRacaController } from '@modules/caracteristicasPaciente/raca/useCases/listRaca/ListRacaController';
import { ListRacaByIdController } from '@modules/caracteristicasPaciente/raca/useCases/listRacaById/ListRacaByIdController';
import { UpdateRacaController } from '@modules/caracteristicasPaciente/raca/useCases/updateRaca/UpdateRacaController';
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
