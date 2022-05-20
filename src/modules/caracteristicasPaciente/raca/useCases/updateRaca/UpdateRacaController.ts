import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRacaUseCase } from './UpdateRacaUseCase';
 

class UpdateRacaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { raca_etnia } = request.body;

    const updateracaUseCase = container.resolve(UpdateRacaUseCase);
    await updateracaUseCase.execute(id, raca_etnia);

    return response.status(204).send();
  }
}

export { UpdateRacaController };
