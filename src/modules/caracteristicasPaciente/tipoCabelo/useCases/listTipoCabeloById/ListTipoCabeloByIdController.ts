import { ListTipoCabeloByIdUseCase } from '@modules/caracteristicasPaciente/tipoCabelo/useCases/listTipoCabeloById/ListTipoCabeloByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListTipoCabeloByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listTipoCabeloByIdUseCase = container.resolve(
      ListTipoCabeloByIdUseCase,
    );
    const data = await listTipoCabeloByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListTipoCabeloByIdController };
