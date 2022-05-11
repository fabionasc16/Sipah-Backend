import { UpdateTipoCabeloUseCase } from '@modules/tipoCabelo/useCases/updateTipoCabelo/UpdateTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UpdateTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nameTipoCabelo } = request.body;

    const updateTipoCabeloUseCase = container.resolve(UpdateTipoCabeloUseCase);
    await updateTipoCabeloUseCase.execute({
      id,
      nameTipoCabelo,
    });

    return response.status(204).send();
  }
}

export { UpdateTipoCabeloController };
