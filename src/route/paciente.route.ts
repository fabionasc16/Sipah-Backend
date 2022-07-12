import { AppError } from 'AppError';
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

// Teste upload treat error
const up = multer(upload.getConfig).array('arquivos', 5);
pacientesRoutes.post('/upload/:id', [
  function (req, res, next) {
    up(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        if (err.code === 'LIMIT_PART_COUNT') {
          return res.status(400).send({
            message: 'Máximo 5 imagens por paciente.',
          });
        }

        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).send({
            message: 'Tamanho de arquivo máximo 10 MB',
          });
        }

        return res.status(500).send(err);
      }
      if (err) {
        // An unknown error occurred when uploading.
        if (
          err.message ===
          '5 (cinco) é quantidade máxima de Imagem por paciente.'
        ) {
          return res.status(400).send({
            message: 'Máximo 5 imagens por paciente.',
          });
        }
        return res.status(500).send(err);
      }

      // Everything went fine.
      next();
    });
  },
  pacienteController.uploadImagem,
]);

// upload Imagem de paciente
// pacientesRoutes.post(
//   '/upload/:id',
//   multer(upload.getConfig).array('arquivos', 5),
//   pacienteController.uploadImagem,
// );
// load Imagem de paciente
pacientesRoutes.get('/load/:id', pacienteController.loadImagem);
// delete Imagem de paciente
pacientesRoutes.delete('/deleteimage/:id', pacienteController.delete);

// upload termo de paciente
pacientesRoutes.post(
  '/uploadtermo/:id',
  multer(upload.getConfig).single('termo'),
  pacienteController.uploadTermo,
);
// load termo de paciente
pacientesRoutes.get('/loadtermo/:id', pacienteController.loadTermo);
// delete termo de paciente
pacientesRoutes.delete('/deletetermo/:id', pacienteController.delete);

export { pacientesRoutes };
