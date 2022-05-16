import fs from 'fs';
import mime from 'mime-types';
import multer from 'multer';

export class Upload {
  private url = './images';
  private userid: any;

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (request, file, callback) => {
        this.userid = request.params.pacienteid;
        if (!fs.existsSync(this.url)) {
          fs.mkdirSync(this.url);
        }
        callback(null, this.url);
      },
      filename: (request, file, callback) => {
        callback(null, `${this.userid}-${file.originalname}`);
      },
    });
  }

  private fileFilter() {
    return (
      request: Request,
      file: Express.Multer.File,
      callback: multer.FileFilterCallback,
    ) => {
      const type = mime.extension(file.mimetype);
      const fileExtensions: string[] = ['png', 'jpg', 'jpeg'];
      if (fileExtensions.includes(`${type}`)) {
        callback(null, true);
      }

      callback(null, false);
    };
  }

  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
      fileFilter: this.fileFilter(),
    };
  }
}

export const upload = new Upload();
