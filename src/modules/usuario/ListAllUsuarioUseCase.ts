import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { inject, injectable } from 'tsyringe';

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
