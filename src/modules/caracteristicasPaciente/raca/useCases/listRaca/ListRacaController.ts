import { ListRacaUseCase } from './ListRacaUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListRacaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRacaUseCase = container.resolve(ListRacaUseCase);
    const data = await listRacaUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListRacaController };
