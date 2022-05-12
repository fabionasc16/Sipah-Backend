import { ListAllCorCabeloUseCase } from '@modules/corCabelo/useCases/listAllCorCabelo/ListAllCorCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllCorCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCorCabeloUseCase = container.resolve(ListAllCorCabeloUseCase);
    const data = await listAllCorCabeloUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListAllCorCabeloController };
