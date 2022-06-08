import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllCaracteristicaUseCase } from './ListAllCaracteristicaUseCase';

class ListAllCaracteristicaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCaracteristicaUseCase = container.resolve(
      ListAllCaracteristicaUseCase,
    );
    const data = await listAllCaracteristicaUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListAllCaracteristicaController };
