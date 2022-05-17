import { ListAllTipoCabeloUseCase } from '@modules/caracteristicasPaciente/tipoCabelo/useCases/listAllTipoCabelo/ListAllTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTipoCabeloUseCase = container.resolve(
      ListAllTipoCabeloUseCase,
    );
    const data = await listAllTipoCabeloUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListAllTipoCabeloController };
