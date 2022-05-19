import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListUsuarioByCPFUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(cpf: string): Promise<any> {
    if (!cpf) {
      throw new AppError('Please, to add a CPF in query argument!', 400);
    }

    const data = await this.usuarioRepository.listByCPF(String(cpf));
    if (!data) {
      throw new AppError('None CPF was found in database!', 404);
    }

    return data;
  }
}

export { ListUsuarioByCPFUseCase };
