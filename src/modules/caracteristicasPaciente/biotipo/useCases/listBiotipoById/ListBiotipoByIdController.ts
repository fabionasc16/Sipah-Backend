import { ListBiotipoByIdUseCase } from './ListBiotipoByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListBiotipoByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listbiotipoByIdUseCase = container.resolve(
      ListBiotipoByIdUseCase,
    );
    const data = await listbiotipoByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListBiotipoByIdController };
