import fs from 'fs';
import multer from 'multer';

class Upload {
  private url = './images';
  private userid: any;

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (request, file, callback) => {
        this.userid = request.params.id;
        if (!fs.existsSync(this.url)) {
          fs.mkdirSync(this.url);
        }
        callback(null, this.url);
      },
      filename: (request, file, callback) => {
        callback(null, `${this.userid}-${Date.now()}-${file.originalname}`);
      },
    });
  }

  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
    };
  }
}

export const upload = new Upload();
