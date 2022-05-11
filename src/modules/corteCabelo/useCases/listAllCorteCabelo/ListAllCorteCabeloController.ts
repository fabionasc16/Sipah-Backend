import { ListAllCorteCabeloUseCase } from '@modules/corteCabelo/useCases/listAllCorteCabelo/ListAllCorteCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllCorteCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCorteCabeloUseCase = container.resolve(
      ListAllCorteCabeloUseCase,
    );
    const data = await listAllCorteCabeloUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListAllCorteCabeloController };
