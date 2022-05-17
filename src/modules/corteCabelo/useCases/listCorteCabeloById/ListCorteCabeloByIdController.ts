import { ListCorteCabeloByIdUseCase } from '@modules/corteCabelo/useCases/listCorteCabeloById/ListCorteCabeloByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListCorteCabeloByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listCorteCabeloByIdUseCase = container.resolve(
      ListCorteCabeloByIdUseCase,
    );
    const data = await listCorteCabeloByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListCorteCabeloByIdController };
