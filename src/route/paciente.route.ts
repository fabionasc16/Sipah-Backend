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
pacientesRoutes.post('/searchout/', pacienteController.listSearchOut);
pacientesRoutes.get('/listexternalid/:id', pacienteController.listByExternalId);

// upload termo de paciente
const up = multer(upload.getConfig).fields([
  { name: 'termo', maxCount: 1 },
  { name: 'arquivos', maxCount: 5 },
]);
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

        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          if (err.field === 'arquivos') {
            return res.status(400).send({
              message: 'Máximo 5 imagens por paciente.',
            });
          }
          return res.status(400).send({
            message: 'Máximo 1 termo por paciente.',
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
        if (err.message === 'Apenas 5 (cinco) Imagens por paciente') {
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

pacientesRoutes.get('/openimage/:id', pacienteController.loadImageByIdOpen);
// load Imagem de paciente
pacientesRoutes.get('/load/:id', pacienteController.loadImagem);
// load Imagem por ID da imagem
pacientesRoutes.get('/loadimage/:id', pacienteController.loadImagemById);
// delete Imagem de paciente
pacientesRoutes.delete('/deleteimage/:id', pacienteController.deleteImagem);

// upload termo de paciente
pacientesRoutes.post('/uploadtermo/:id', [
  function (req, res, next) {
    up(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        if (err.code === 'LIMIT_PART_COUNT') {
          return res.status(400).send({
            message: 'Máximo 1 termo por paciente.',
          });
        }

        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          if (err.field === 'arquivos') {
            return res.status(400).send({
              message: 'Máximo 5 imagens por paciente.',
            });
          }
          return res.status(400).send({
            message: 'Máximo 1 termo por paciente.',
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
        if (err.message === 'Apenas 1 (um) termo por paciente') {
          return res.status(400).send({
            message: 'Máximo 1 termo por paciente.',
          });
        }
        return res.status(500).send(err);
      }

      // Everything went fine.
      next();
    });
  },
  pacienteController.uploadTermo,
]);

// load termo de paciente
pacientesRoutes.get('/loadtermo/:id', pacienteController.loadTermo);
// load Imagem por ID da imagem
pacientesRoutes.get('/loadtermoid/:id', pacienteController.loadTermoById);
// delete termo de paciente
pacientesRoutes.delete('/deletetermo/:id', pacienteController.deleteTermo);

export { pacientesRoutes };
