import { DeleteCorCabeloUseCase } from '@modules/caracteristicasPaciente/corCabelo/useCases/deleteCorCabelo/DeleteCorCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteCorCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCorCabeloUseCase = container.resolve(DeleteCorCabeloUseCase);

    await deleteCorCabeloUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteCorCabeloController };
