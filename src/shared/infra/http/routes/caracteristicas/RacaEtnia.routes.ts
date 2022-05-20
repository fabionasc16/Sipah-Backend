import { CreateRacaController } from '@modules/caracteristicasPaciente/raca/useCases/createRaca/CreateRacaController';
import { DeleteRacaController } from '@modules/caracteristicasPaciente/raca/useCases/deleteRaca/DeleteRacaController';
import { ListRacaController } from '@modules/caracteristicasPaciente/raca/useCases/listRaca/ListRacaController';
import { ListRacaByIdController } from '@modules/caracteristicasPaciente/raca/useCases/listRacaById/ListRacaByIdController';
import { UpdateRacaController } from '@modules/caracteristicasPaciente/raca/useCases/updateRaca/UpdateRacaController';
import { Router } from 'express';

const racaEtniaRoutes = Router();

const createracaController = new CreateRacaController();
const deleteracaController = new DeleteRacaController();
const listracaController = new ListRacaController();
const listracaByIdController = new ListRacaByIdController();
const updateracaController = new UpdateRacaController();

racaEtniaRoutes.post('/', createracaController.handle);
racaEtniaRoutes.delete('/:id', deleteracaController.handle);
racaEtniaRoutes.get('/', listracaController.handle);
racaEtniaRoutes.get('/:id', listracaByIdController.handle);
racaEtniaRoutes.put('/:id', updateracaController.handle);

export { racaEtniaRoutes };
