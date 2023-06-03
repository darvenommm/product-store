import multer from 'multer';
import bytes from 'bytes';
import { resolve, parse } from 'node:path';

const storage = multer.diskStorage({
  destination: resolve('static', 'photos'),
  filename: (_, file, cb) => {
    const filePath = parse(file.originalname);
    const basename = filePath.name.replaceAll(/\s/g, '-');
    const extname = filePath.ext;

    cb(null, `${basename}-${Date.now()}${extname}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: bytes('10mb'),
  },
});
