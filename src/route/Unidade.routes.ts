import { Router } from 'express';

import { AuthService } from '../service/auth.service';

const unidadeRoutes = Router();

const authService = new AuthService();

unidadeRoutes.post('/create', authService.createUnities);
unidadeRoutes.get('/list', authService.listUnities);
unidadeRoutes.get('/listid/:id', authService.listByIdUnities);
unidadeRoutes.put('/update/:id', authService.updateUnities);
unidadeRoutes.delete('/delete/:id', authService.deleteUnities);
unidadeRoutes.get('/listcnpj/:id', authService.listByCNPJUnities);

export { unidadeRoutes };
