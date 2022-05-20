import { CreateRacaUseCase } from './CreateRacaUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateRacaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { raca_etnia } = request.body;
    const createRacaUseCase = container.resolve(CreateRacaUseCase);
    const data = await createRacaUseCase.execute(raca_etnia);

    return response.status(201).json(data);
  }
}

export { CreateRacaController };
