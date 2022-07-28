import { Request, Response } from 'express';
import { BuscaService } from 'service/Busca.Service';



class BuscaController {   
  static service: BuscaService;
  public constructor() {

        BuscaController.service = new BuscaService();
    }

    async listAllBusca(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listAllBusca(request.query);
        return response.status(200).json(data);
    }

    async createBusca(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.create(request.body);
        return response.status(200).json(data);
    }

    async listBuscaByCPF(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaByCPF(request.params.cpf);
        return response.status(200).json(data);
    }

    async listBuscaById(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaById(request.params.id);
        return response.status(200).json(data);
    }

    async listBuscaByIdPaciente(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaByIdPaciente(request.params.id);
        return response.status(200).json(data);
    }

    async listBuscaByIdInteressado(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaByIdInteressado(request.params.id);
        return response.status(200).json(data);
    }

    /*async mudarStatus(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.mudarStatus(request.params.id);
        return response.status(200).json(data);
    }*/
}

export { BuscaController };