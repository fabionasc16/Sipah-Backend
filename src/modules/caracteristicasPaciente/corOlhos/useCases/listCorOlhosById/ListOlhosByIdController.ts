import { ListOlhosByIdUseCase } from './ListOlhosByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListOlhosByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listolhosByIdUseCase = container.resolve(
      ListOlhosByIdUseCase,
    );
    const data = await listolhosByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListOlhosByIdController };
