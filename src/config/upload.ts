import { AppError } from '../AppError';
import fs from 'fs';
import { imagensPaciente } from '../model/ImagensPaciente.model';
import { termoPaciente } from '../model/TermosPaciente.model';
import mongoose from 'mongoose';
import multer from 'multer';

class Upload {
  private url = './images';
  private userid: any;
  private qtdImgDB;
  private qtdImgReq;
  private tipo;
  private qtdSalvo;
  private max;
  private maxTipo;

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: async (request, file, callback) => {
        this.userid = request.params.id;
        // valida máximo de 5 imagens por paciente
        // this.tipo = request.files[0].fieldname;
        const [, , , tipoReq] = request.originalUrl.split('/');
        this.tipo = tipoReq;
        if (Object.keys(request.files).length !== 0) {
          if (this.tipo === 'uploadtermo') {
            this.qtdImgReq = request.files.termo.length;
            this.maxTipo = 1;
            this.qtdSalvo = await termoPaciente.find({
              paciente: new mongoose.Types.ObjectId(this.userid.toString()),
            });
          } else {
            this.qtdImgReq = request.files.arquivos.length;
            this.maxTipo = 5;
            this.qtdSalvo = await imagensPaciente.find({
              paciente: new mongoose.Types.ObjectId(this.userid.toString()),
            });
          }
        }
        // const qtdImgReq = request.files.length;
        // const qtdImgDB = 0;
        if (this.qtdSalvo !== null) {
          this.qtdImgDB = this.qtdSalvo.length;
          this.max = this.qtdImgReq + this.qtdImgDB;
        } else {
          this.max = 0;
        }
        if (this.tipo === 'uploadtermo') {
          if (this.max > 1) {
            const mensagem:any = new AppError('Apenas 1 (um) termo por paciente')
            return callback(mensagem,'');
          }
        } else if (this.max > 5) {
          const mensagem:any =  new AppError('Apenas 5 (cinco) Imagens por paciente')
          return callback(mensagem,'');
        }
        if (!fs.existsSync(this.url)) {
          fs.mkdirSync(this.url);
        }
        callback(null, this.url);
      },
      filename: (request, file, callback) => {
        // callback(null, `${this.userid}-${Date.now()}-${file.originalname}`);
        callback(null, `${this.userid}-${Date.now()}-${file.originalname}.jpg`);
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
        fileSize: 10485760,
        parts: this.maxTipo,
      },
    };
  }
}

export const upload = new Upload();
