import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListUsuarioByIdUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.usuarioRepository.listById(id);
    if (!data) {
      throw new AppError('None User was found in database!', 404);
    }

    return data;
  }
}
export { ListUsuarioByIdUseCase };
