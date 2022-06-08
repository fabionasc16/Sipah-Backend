import { CreateTipoCaracteristicaController } from '@modules/tipoCaracteristica/CreateTipoCaracteristicaController';
import { Router } from 'express';

const tipoCaracteristicaRoutes = Router();

const createTipoCaracteristicaController =
  new CreateTipoCaracteristicaController();

tipoCaracteristicaRoutes.post('/', createTipoCaracteristicaController.handle);

tipoCaracteristicaRoutes.delete(
  '/:id',
  createTipoCaracteristicaController.handle,
);

tipoCaracteristicaRoutes.get('/', createTipoCaracteristicaController.handle);

tipoCaracteristicaRoutes.get('/:id', createTipoCaracteristicaController.handle);

tipoCaracteristicaRoutes.put('/:id', createTipoCaracteristicaController.handle);

export { tipoCaracteristicaRoutes };
