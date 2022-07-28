import { ParsedQs } from "qs";
import { BuscaRepository } from "../repository/BuscaRepository";
import { AppError } from 'AppError';
import { Messages } from "messages/Messages";

export class BuscaService {
 
    private buscaRepository: BuscaRepository;

    constructor() {
        this.buscaRepository = new BuscaRepository();
    }
    async listBuscaById(id: string) {
        return this.buscaRepository.listById(id);
    }
    async listBuscaByIdPaciente(idPaciente: string) {
        return this.buscaRepository.listByIdPaciente(idPaciente);
    }
    async listBuscaByIdInteressado(idInteressado: string) {
        return this.buscaRepository.listByIdInteressado(idInteressado);
    }
    async listBuscaByCPF(cpf: string) {
        return this.buscaRepository.listByCPF(cpf);
    }
    async create(data: any) {
        return await this.buscaRepository.create(data);
    }

    async listAllBusca(params: any) {
        return await this.buscaRepository.listAllBusca(params);
    }

    /*async adcionandoIdPaciente(data: any) {
        const existIdPaciente = await this.
    }*/
}