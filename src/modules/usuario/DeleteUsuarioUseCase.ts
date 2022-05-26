import { IUsuarioRepository } from '@modules/usuario/IUsuarioRepository';
import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(id: string): Promise<any> {
    const usuario = await this.usuarioRepository.listById(id);
    if (!usuario) {
      throw new AppError(Messages.NO_USUARIO_REGISTERED, 404);
    }

    await this.usuarioRepository.delete(id);
  }
}

export { DeleteUsuarioUseCase };
