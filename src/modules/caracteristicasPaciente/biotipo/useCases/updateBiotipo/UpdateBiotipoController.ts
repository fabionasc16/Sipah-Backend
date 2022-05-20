import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateBiotipoUseCase } from './UpdateBiotipoUseCase';

class UpdateBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { biotipo } = request.body;

    const updatebiotipoUseCase = container.resolve(UpdateBiotipoUseCase);
    await updatebiotipoUseCase.execute(id, biotipo);

    return response.status(204).send();
  }
}

export { UpdateBiotipoController };
