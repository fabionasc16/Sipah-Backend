import { ListBiotipoUseCase } from './ListBiotipoUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listbiotipoUseCase = container.resolve(ListBiotipoUseCase);
    const data = await listbiotipoUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListBiotipoController };
