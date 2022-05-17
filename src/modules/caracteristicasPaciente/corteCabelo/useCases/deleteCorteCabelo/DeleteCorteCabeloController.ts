import { DeleteCorteCabeloUseCase } from '@modules/caracteristicasPaciente/corteCabelo/useCases/deleteCorteCabelo/DeleteCorteCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteCorteCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCorteCabeloUseCase = container.resolve(
      DeleteCorteCabeloUseCase,
    );

    await deleteCorteCabeloUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteCorteCabeloController };
