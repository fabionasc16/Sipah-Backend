import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListAllUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.usuarioRepository.listAllUsuario();
    return data;
  }
}
export { ListAllUsuarioUseCase };
