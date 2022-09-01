import { UnidadeController } from '../controller/unidade.controller';
import { Router } from 'express';

const unidadeRoutes = Router();

const unidadeController = new UnidadeController();

unidadeRoutes.post('/create', unidadeController.create);
unidadeRoutes.get('/list', unidadeController.list);
unidadeRoutes.get('/listid/:id', unidadeController.listById);
unidadeRoutes.put('/update/:id', unidadeController.update);
unidadeRoutes.delete('/delete/:id', unidadeController.delete);

export { unidadeRoutes };
