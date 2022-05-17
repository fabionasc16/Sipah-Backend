import { DeleteTipoCabeloUseCase } from '@modules/tipoCabelo/useCases/deleteTipoCabelo/DeleteTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteTipoCabeloUseCase = container.resolve(DeleteTipoCabeloUseCase);

    await deleteTipoCabeloUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteTipoCabeloController };
