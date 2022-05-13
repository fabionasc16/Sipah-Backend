import crypto from 'crypto';
import fs from 'fs';
import multer from 'multer';

const folder = './images';
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, folder);
  },
  filename: (request, file, callback) => {
    const fileHash = crypto.randomBytes(10).toString('hex'); // * Create a random hash to image name
    const fileName = `${fileHash}-${file.originalname}`;

    return callback(null, fileName);
  },
});

const upload = multer({ storage });
export { upload };
