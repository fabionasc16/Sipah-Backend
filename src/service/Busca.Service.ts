import { BuscaRepository } from "../repository/BuscaRepository";
export class BuscaService {
 
    private buscaRepository: BuscaRepository;

    constructor() {
        this.buscaRepository = new BuscaRepository();
    }
    async listBuscaByPaciente(Paciente: string) {
        return this.buscaRepository.listByPaciente(Paciente);
    }
    async listBuscaByInteressado(Interessado: string) {
        return this.buscaRepository.listByInteressado(Interessado);
    }
    async create(data: any) {
        return await this.buscaRepository.create(data);
    }

    async listAllBusca(params: any) {
        return await this.buscaRepository.listAllBusca(params);
    }
}