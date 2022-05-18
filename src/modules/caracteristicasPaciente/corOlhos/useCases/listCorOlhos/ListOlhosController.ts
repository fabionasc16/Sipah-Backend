import { ListOlhosUseCase } from './ListOlhosUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListOlhosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listolhosUseCase = container.resolve(ListOlhosUseCase);
    const data = await listolhosUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListOlhosController };
