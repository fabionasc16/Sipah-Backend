import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateOlhosUseCase } from "./UpdateOlhosUseCase"

class UpdateCorOlhosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { cor_olhos } = request.body;

    const updateolhosUseCase = container.resolve(UpdateOlhosUseCase);
    await updateolhosUseCase.execute(id, cor_olhos);

    return response.status(204).send();
  }
}

export { UpdateCorOlhosController };
