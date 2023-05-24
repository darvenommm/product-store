import multer from 'multer';
import bytes from 'bytes';
import { resolve } from 'node:path';

const storage = multer.diskStorage({
  destination: resolve('static', 'photos'),
  filename: (_, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: bytes('10mb'),
  },
});
