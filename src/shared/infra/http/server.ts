import * as dotenv from 'dotenv';

import { app } from './app';

dotenv.config({
  // * path: process.env.NODE_ENV === 'production' ? './.env' : './.env.dev',
  path: './.env',
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
