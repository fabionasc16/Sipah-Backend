import { CreateOlhosUseCase } from './CreateOlhosUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateOlhosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cor_olhos } = request.body;
    const createcorolhosUseCase = container.resolve(CreateOlhosUseCase);
    const data = await createcorolhosUseCase.execute(cor_olhos);

    return response.status(201).json(data);
  }
}

export { CreateOlhosController };
