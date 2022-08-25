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
    return await this.usuarioRepository.create(data);
  }

  async listAllUsuario(params: any) {
    return await this.usuarioRepository.listAllUsuario(params);
  }

  async listAllUsuarioByUnit(idunidade: any) {
    return await this.usuarioRepository.listAllUsuarioByUnit(idunidade);
  }

  async mudarStatus(id: string) {
    return await this.usuarioRepository.mudarStatus(id);
  }
}
