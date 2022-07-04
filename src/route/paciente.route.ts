import { PacienteController } from 'controller/paciente.controller';
import { Router } from 'express';
import multer from 'multer';

import { upload } from '../config/upload';

const pacientesRoutes = Router();

const pacienteController = new PacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', pacienteController.create);
pacientesRoutes.post('/list/', pacienteController.listsearch);
pacientesRoutes.get('/listid/:id', pacienteController.listById);
pacientesRoutes.delete('/delete/:id', pacienteController.delete);
pacientesRoutes.put('/update/:id', pacienteController.update);
pacientesRoutes.post(
  '/upload/:id',
  multer(upload.getConfig).array('arquivos', 3),
  pacienteController.uploadImagem,
);
pacientesRoutes.get('/load/:id', pacienteController.loadImagem);

export { pacientesRoutes };
