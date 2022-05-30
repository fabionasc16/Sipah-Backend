import { ParsedQs } from "qs";
import { UsuarioRepository } from "repository/implementations/UsuarioRepository";
import { AppError } from 'AppError';
import { Messages } from "messages/Messages";

export class UsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async updateUsuario(query: any) {
        this.usuarioRepository.update(query);
    }
    async deleteUsuario(query: any) {
        this.usuarioRepository.delete(query);
    }
    async listUsuarioById(id: string) {
        this.usuarioRepository.listUsuarioById(id);
    }
    async listUsuarioByCPF(cpf: string) {
        this.usuarioRepository.listUsuarioByCPF(cpf);
    }
    async create(data: any) {
        const existCPF = await this.usuarioRepository.listByCPF(data.cpf);
        if (existCPF) {
            throw new AppError(Messages.USUARIO_ALREADY_EXISTS, 400);
        }
        data.dataNascimento = new Date(data.dataNascimento)
            .toISOString()
            .substring(0, 10);
        const cadastroUsuario = await this.usuarioRepository.create(data);
    }

    async listAllUsuario(params: any) {
        return await this.usuarioRepository.listAllUsuario(params);
    }

}