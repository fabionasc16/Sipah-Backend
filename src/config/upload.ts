import { AppError } from 'AppError';
// import { Request } from 'express-serve-static-core';
import fs from 'fs';
// import mime from 'mime-types';
import { imagensPaciente } from 'model/ImagensPaciente.model';
import mongoose from 'mongoose';
import multer from 'multer';

class Upload {
  private url = './images';
  private userid: any;
  private qtdImgDB;

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: async (request, file, callback) => {
        this.userid = request.params.id;
        // valida máximo de 5 imagens por paciente
        const qtdImagemSalva = await imagensPaciente.find({
          paciente: new mongoose.Types.ObjectId(this.userid.toString()),
        });
        const qtdImgReq = request.files.length;
        // let qtdImgDB = 0;
        if (qtdImagemSalva !== null) {
          this.qtdImgDB = qtdImagemSalva.length;
        }
        const max = qtdImgReq + this.qtdImgDB;
        if (max > 5) {
          callback(
            new AppError(
              '5 (cinco) é quantidade máxima de Imagem por paciente.',
            ),
          );
        } else {
          if (!fs.existsSync(this.url)) {
            fs.mkdirSync(this.url);
          }
          callback(null, this.url);
        }
      },
      filename: (request, file, callback) => {
        callback(null, `${this.userid}-${Date.now()}-${file.originalname}`);
      },
    });
  }

  // private fileFilter(req, file, callback) {
  // private fileFilter() {
  //   return (
  //     request: Request,
  //     file: Express.Multer.File,
  //     callback: multer.FileFilterCallback,
  //   ) => {
  //     const type = mime.extension(file.mimetype);
  //     const fileExtensions: string[] = ['png', 'jpg', 'jpeg'];
  //     if (fileExtensions.includes(`${type}`)) {
  //       callback(null, true);
  //     }

  //     callback(null, false);
  //   };
  // }

  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
      limits: {
        fileSize: 7340032,
        parts: 5,
      },
    };
  }
}

export const upload = new Upload();
