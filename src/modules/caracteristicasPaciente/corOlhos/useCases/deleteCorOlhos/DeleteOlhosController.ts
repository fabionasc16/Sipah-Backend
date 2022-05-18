import { DeleteOlhosUseCase } from './DeleteOlhosUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteOLhosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteolhosUseCase = container.resolve(DeleteOlhosUseCase);

    await deleteolhosUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteOLhosController };
