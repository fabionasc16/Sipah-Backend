import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCorteCabeloUseCase } from './UpdateCorteCabeloUseCase';

class UpdateCorteCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nameCorteCabelo } = request.body;

    const updateCorteCabeloUseCase = container.resolve(
      UpdateCorteCabeloUseCase,
    );
    await updateCorteCabeloUseCase.execute({
      id,
      nameCorteCabelo,
    });

    return response.status(204).send();
  }
}

export { UpdateCorteCabeloController };
