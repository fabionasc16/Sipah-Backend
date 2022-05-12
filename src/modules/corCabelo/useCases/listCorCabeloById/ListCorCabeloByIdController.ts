import { ListCorCabeloByIdUseCase } from '@modules/corCabelo/useCases/listCorCabeloById/ListCorCabeloByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListCorCabeloByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listCorCabeloByIdUseCase = container.resolve(
      ListCorCabeloByIdUseCase,
    );
    const data = await listCorCabeloByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}

export { ListCorCabeloByIdController };
