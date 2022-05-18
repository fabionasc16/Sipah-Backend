import { ListRacaByIdUseCase } from './ListRacaByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListRacaByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listracaByIdUseCase = container.resolve(
      ListRacaByIdUseCase,
    );
    const data = await listracaByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListRacaByIdController };
