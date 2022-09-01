import { Request, Response } from 'express';
import { BuscaService } from '../service/Busca.Service';
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

    async listBuscaByPaciente(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaByPaciente(request.params.Paciente);
        return response.status(200).json(data);
    }

    async listBuscaByInteressado(request: Request, response: Response): Promise<any> {
        let data = await BuscaController.service.listBuscaByInteressado(request.params.Interessado);
        return response.status(200).json(data);
    }

    /*async mudarStatus(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.mudarStatus(request.params.id);
        return response.status(200).json(data);
    }*/
}

export { BuscaController };