import { CreateTipoCaracteristicaUseCase } from '@modules/tipoCaracteristica/CreateTipoCaracteristicaUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCaracteristicaUseCase } from './CreateCaracteristicaUseCase';

class CreateCaracteristicaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, tipoCaracteristicas } = request.body;
    const createCaracteristicaUseCase = container.resolve(
      CreateCaracteristicaUseCase,
    );

    const data = await createCaracteristicaUseCase.execute(
      name,
      tipoCaracteristicas,
    );

    return response.status(201).json(data);
  }
}

export { CreateCaracteristicaController };
