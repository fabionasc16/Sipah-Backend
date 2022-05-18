import { DeleteRacaUseCase } from './DeleteRacaUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteRacaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteracaUseCase = container.resolve(DeleteRacaUseCase);

    await deleteracaUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteRacaController };
