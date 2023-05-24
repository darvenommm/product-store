import multer from 'multer';
import bytes from 'bytes';
import {
  resolve,
  extname as getExtname,
  basename as getBasename,
} from 'node:path';

const storage = multer.diskStorage({
  destination: resolve('static', 'photos'),
  filename: (_, file, cb) => {
    const basename = getBasename(file.originalname);
    const extname = getExtname(file.originalname);

    cb(null, `${basename}-${Date.now()}${extname}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: bytes('10mb'),
  },
});
