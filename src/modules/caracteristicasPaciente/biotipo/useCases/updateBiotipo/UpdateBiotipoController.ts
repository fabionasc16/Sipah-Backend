import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateBiotipoUseCase } from './UpdateBiotipoUseCase';

class UpdateBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { bio_tipo } = request.body;

    const updatebiotipoUseCase = container.resolve(UpdateBiotipoController);
    await updatebiotipoUseCase.execute(id, bio_tipo);

    return response.status(204).send();
  }
  execute(id: string, bio_tipo: any) {
    throw new Error('Method not implemented.');
  }
}

export { UpdateBiotipoController };
