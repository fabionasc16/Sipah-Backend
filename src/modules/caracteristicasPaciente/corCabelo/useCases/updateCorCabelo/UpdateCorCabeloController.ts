import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCorCabeloUseCase } from './UpdateCorCabeloUseCase';

class UpdateCorCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { cor_cabelo } = request.body;

    const updateCorCabeloUseCase = container.resolve(UpdateCorCabeloUseCase);
    await updateCorCabeloUseCase.execute(id, cor_cabelo);

    return response.status(204).send();
  }
}

export { UpdateCorCabeloController };
