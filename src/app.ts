import 'reflect-metadata';
import { AppError } from 'AppError';
import connection from 'config';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { Messages } from 'messages/Messages';
import morgan from 'morgan';
import { appRoutes } from 'route';
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json"

import 'singleton';

connection();

const app = express();
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  }),
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(express.json());
app.use('/images', express.static('images'));
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
      message: `${Messages.INTERNAL_SERVER_ERROR} ${error}`,
    });
  },
);

export { app };
