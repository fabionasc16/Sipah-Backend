import { ListAllUsuarioUseCase } from '@modules/usuario/useCases/listAllUsuario/ListAllUsuarioUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllUsuarioController {
  async handle(request: Request, response: Response): Promise<any> {
    const listAllUsuarioUseCase = container.resolve(ListAllUsuarioUseCase);
    const data = await listAllUsuarioUseCase.execute();

    return response.status(200).json(data);
  }
}

export { ListAllUsuarioController };
