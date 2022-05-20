import { DeleteUsuarioUseCase } from '@modules/usuario/useCases/deleteUsuario/DeleteUsuarioUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteUsuarioController {
  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);

    await deleteUsuarioUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteUsuarioController };
