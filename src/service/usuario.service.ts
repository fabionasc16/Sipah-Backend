import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { ParsedQs } from 'qs';
import { UsuarioRepository } from 'repository/usuario.repository';

export class UsuarioService {
  private usuarioRepository: UsuarioRepository;

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async updateUsuario(id: string, query: any) {
    return this.usuarioRepository.update(id, query);
  }
  async deleteUsuario(query: any) {
    return this.usuarioRepository.delete(query);
  }
  async listUsuarioById(id: string) {
    return this.usuarioRepository.listById(id);
  }
  async listUsuarioByCPF(cpf: string) {
    return this.usuarioRepository.listByCPF(cpf);
  }
  async create(data: any) {
    const existCPF = await this.usuarioRepository.listByCPF(data.cpf);
    if (existCPF) {
      throw new AppError(Messages.USUARIO_ALREADY_EXISTS, 400);
    }
    data.dataNascimento = new Date(data.dataNascimento)
      .toISOString()
      .substring(0, 10);

    return await this.usuarioRepository.create(data);
  }

  async listAllUsuario(params: any, idunidade: any) {
    return await this.usuarioRepository.listAllUsuario(params, idunidade);
  }

  async mudarStatus(id: string) {
    return await this.usuarioRepository.mudarStatus(id);
  }
}
