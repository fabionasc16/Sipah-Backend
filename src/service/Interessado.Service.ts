import { InteressadoRepository } from "../repository/InteressadoRepository";
import { AppError } from '../AppError';
import { Messages } from "../messages/Messages";

export class InteressadoService {
 
    private interessadoRepository: InteressadoRepository;

    constructor() {
        this.interessadoRepository = new InteressadoRepository();
    }

    async updateInteressado( id:string, query: any) {
       return this.interessadoRepository.update(id, query);
    }
    async deleteInteressado(query: any) {
        return this.interessadoRepository.delete(query);
    }
    async listInteressadoById(id: string) {
        return this.interessadoRepository.listById(id);
    }
    async listInteressadoByCPF(cpf: string) {
        return this.interessadoRepository.listByCPF(cpf);
    }
    async create(data: any) {
        const existCPF = await this.interessadoRepository.listByCPF(data.cpf);
        if (existCPF) {
            throw new AppError(Messages.USUARIO_ALREADY_EXISTS, 400);
        }
        data.dataNascimento = new Date(data.dataNascimento)
            .toISOString()
            .substring(0, 10);
            
        return await this.interessadoRepository.create(data);
    }

    async listAllInteressado(params: any) {
        return await this.interessadoRepository.listAllInteressado(params);
    }

    /*async adcionandoIdPaciente(data: any) {
        const existIdPaciente = await this.
    }*/
}