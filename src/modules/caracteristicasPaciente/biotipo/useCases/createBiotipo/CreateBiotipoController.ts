import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBiotipoUseCase } from './CreateBiotipoUseCase';

class CreateBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { biotipo } = request.body;
    const createbiotipoUseCase = container.resolve(CreateBiotipoUseCase);
    const data = await createbiotipoUseCase.execute(biotipo);

    return response.status(201).json(data);
  }
}

export { CreateBiotipoController };
