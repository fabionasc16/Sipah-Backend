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

// upload e load de Imagem de paciente
pacientesRoutes.post(
  '/upload/:id',
  multer(upload.getConfig).array('arquivos', 3),
  pacienteController.uploadImagem,
);
pacientesRoutes.get('/load/:id', pacienteController.loadImagem);

// upload e load de termo de paciente
pacientesRoutes.post(
  '/uploadtermo/:id',
  multer(upload.getConfig).array('termo', 3),
  pacienteController.uploadTermo,
);
pacientesRoutes.get('/loadtermo/:id', pacienteController.loadTermo);

export { pacientesRoutes };
