import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

import 'express-async-errors';
import { AppError } from '@shared/errors/AppError';
import { appRoutes } from '@shared/infra/http/routes';
import connection from '@shared/infra/mongo';

import '@shared/container';

connection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use('/api', appRoutes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error. Error: ${error.message}`,
    });
  },
);

export { app };
