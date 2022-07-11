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

// upload Imagem de paciente
pacientesRoutes.post(
  '/upload/:id',
  multer(upload.getConfig).array('arquivos', 5),
  pacienteController.uploadImagem,
);
// load Imagem de paciente
pacientesRoutes.get('/load/:id', pacienteController.loadImagem);
// delete Imagem de paciente
pacientesRoutes.delete('/deleteimage/:id', pacienteController.delete);

// upload termo de paciente
pacientesRoutes.post(
  '/uploadtermo/:id',
  multer(upload.getConfig).array('termo', 5),
  pacienteController.uploadTermo,
);
// load termo de paciente
pacientesRoutes.get('/loadtermo/:id', pacienteController.loadTermo);
// delete termo de paciente
pacientesRoutes.delete('/deletetermo/:id', pacienteController.delete);

export { pacientesRoutes };
