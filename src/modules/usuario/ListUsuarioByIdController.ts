import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsuarioByIdUseCase } from './ListUsuarioByIdUseCase';

class ListUsuarioByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUsuarioByIdUseCase = container.resolve(ListUsuarioByIdUseCase);
    const data = await listUsuarioByIdUseCase.execute(id);

    return response.status(200).json(data);
  }
}
export { ListUsuarioByIdController };
