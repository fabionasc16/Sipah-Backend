import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCadastroPacienteUseCase } from './DeleteCadastroPacienteUseCase';

class DeleteCadastroPacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const useCase = container.resolve(DeleteCadastroPacienteUseCase);

    await useCase.execute(id);
    return response.status(204).send();
  }
}

export { DeleteCadastroPacienteController };
