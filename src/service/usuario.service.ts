import { ParsedQs } from "qs";
import { UsuarioRepository } from "repository/implementations/usuario.repository";
import { AppError } from 'AppError';
import { Messages } from "messages/Messages";

export class UsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async updateUsuario( id:string, query: any) {
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

    async listAllUsuario(params: any) {
        return await this.usuarioRepository.listAllUsuario(params);
    }

}