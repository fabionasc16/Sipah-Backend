import { Request } from 'express-serve-static-core';
import fs from 'fs';
import mime from 'mime-types';
import multer, { Multer } from 'multer';
import path from 'path';

export class UploadImages {
  private urlimage: string = path.basename('images');
  private code: any;

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req, file, callback) => {
        this.code = req.query.code;
        if (!fs.existsSync(this.urlimage)) {
          fs.mkdirSync(this.urlimage);
        }

        callback(null, this.urlimage);
      },
      filename: (req, file, callback) => {
        const type = mime.extension(file.mimetype);
        callback(null, `${this.code}.${type}`);
      },
    });
  }

  private fileFilter() {
    return (
      req: Request,
      file: Express.Multer.File,
      callback: multer.FileFilterCallback,
    ) => {
      const type = mime.extension(file.mimetype);
      const conditions = ['jpg', 'jpeg', 'png'];
      if (conditions.includes(`${type}`)) {
        callback(null, true);
      }

      callback(null, false);
    };
  }

  get GetConfig(): multer.Options {
    return {
      storage: this.storage(),
      fileFilter: this.fileFilter(),
    };
  }
}

export const uploadImages = new UploadImages();
