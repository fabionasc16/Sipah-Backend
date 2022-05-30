import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { AppError } from 'AppError';
import { inject, injectable } from 'tsyringe';

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
