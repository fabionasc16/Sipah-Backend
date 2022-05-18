import { UpdateTipoCabeloUseCase } from '@modules/caracteristicasPaciente/tipoCabelo/useCases/updateTipoCabelo/UpdateTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UpdateTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { tipo_cabelo } = request.body;

    const updateTipoCabeloUseCase = container.resolve(UpdateTipoCabeloUseCase);
    await updateTipoCabeloUseCase.execute(id, tipo_cabelo);

    return response.status(204).send();
  }
}

export { UpdateTipoCabeloController };
