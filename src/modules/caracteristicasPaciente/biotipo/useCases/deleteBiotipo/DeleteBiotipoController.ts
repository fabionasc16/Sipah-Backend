import { DeleteBiotipoUseCase } from './DeleteBiotipoUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteBiotipoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletebiotipoUseCase = container.resolve(DeleteBiotipoUseCase);

    await deletebiotipoUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteBiotipoController };
