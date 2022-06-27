import { upload } from 'config/upload';
import { PacienteController } from 'controller/paciente.controller';
import { Router } from 'express';
import multer from 'multer';

const pacientesRoutes = Router();

const pacienteController = new PacienteController();

// * Rotas para Cadastro de Pacientes
pacientesRoutes.post('/', pacienteController.create);
pacientesRoutes.get('/list/', pacienteController.list);
pacientesRoutes.get('/listid/:id', pacienteController.listById);
pacientesRoutes.delete('/delete/:id', pacienteController.delete);
pacientesRoutes.put('/update/:id', pacienteController.update);
pacientesRoutes.post(
  '/upload/:id',
  multer(upload.getConfig).array('arquivos'),
  pacienteController.uploadImagem,
);

export { pacientesRoutes };
