import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTipoCaracteristicaUseCase } from './CreateTipoCaracteristicaUseCase';

class CreateTipoCaracteristicaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, id } = request.body;
    const createTipoCaracteristicaUseCase = container.resolve(
      CreateTipoCaracteristicaUseCase,
    );
    const data = await createTipoCaracteristicaUseCase.execute(name, id);

    return response.status(201).json(data);
  }
}

export { CreateTipoCaracteristicaController };
