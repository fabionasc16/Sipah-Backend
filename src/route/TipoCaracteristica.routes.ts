import { TipoCaracteristicaController } from "../controller/TipoCaracteristica.Controller";
import { Router } from 'express';

const tipoCaracteristicaRoutes = Router();

const tipoCaracteristicaController =  new TipoCaracteristicaController();

tipoCaracteristicaRoutes.post('/', tipoCaracteristicaController.create);

tipoCaracteristicaRoutes.delete('/:id', tipoCaracteristicaController.delete);

tipoCaracteristicaRoutes.get('/', tipoCaracteristicaController.list);

tipoCaracteristicaRoutes.get('/:id', tipoCaracteristicaController.listById);

tipoCaracteristicaRoutes.put('/:id', tipoCaracteristicaController.update);

export { tipoCaracteristicaRoutes };
