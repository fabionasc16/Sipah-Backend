import { Request, Response } from 'express';
import { InteressadoService } from 'service/Interessado.Service';



class InteressadoController {   
  static service: InteressadoService;
  public constructor() {

        InteressadoController.service = new InteressadoService();
    }

    async listAllInteressado(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.listAllInteressado(request.query);
        return response.status(200).json(data);
    }

    async createInteressado(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.create(request.body);
        return response.status(200).json(data);
    }

    async listInteressadoByCPF(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.listInteressadoByCPF(request.params.cpf);
        return response.status(200).json(data);
    }

    async listInteressadoById(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.listInteressadoById(request.params.id);
        return response.status(200).json(data);
    }

    async deleteInteressado(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.deleteInteressado(request.params.id);
        return response.status(200).json(data);
    }
    async updateInteressado(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.updateInteressado(request.params.id, request.body);
        return response.status(200).json(data);
    }


    /*async mudarStatus(request: Request, response: Response): Promise<any> {
        let data = await InteressadoController.service.mudarStatus(request.params.id);
        return response.status(200).json(data);
    }*/
}

export { InteressadoController };