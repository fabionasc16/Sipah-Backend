import { CreateBiotipoUseCase } from './CreateBiotipoUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { bio_tipo } = request.body;
    const createbiotipoUseCase = container.resolve(CreateBiotipoUseCase);
    const data = await createbiotipoUseCase.execute(bio_tipo);

    return response.status(201).json(data);
  }
}

export { CreateBiotipoController };
