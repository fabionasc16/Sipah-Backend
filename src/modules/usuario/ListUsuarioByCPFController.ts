import { ListUsuarioByCPFUseCase } from '@modules/usuario/ListUsuarioByCPFUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListUsuarioByCPFController {
  async handle(request: Request, response: Response): Promise<any> {
    const { cpf_usuario } = request.query;

    const listUsuarioByCPFUsesCase = container.resolve(ListUsuarioByCPFUseCase);

    const data = await listUsuarioByCPFUsesCase.execute(String(cpf_usuario));

    return response.status(200).json(data);
  }
}

export { ListUsuarioByCPFController };
