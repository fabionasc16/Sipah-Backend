import { Request, Response } from 'express';
import { UsuarioService } from 'service/usuario.service';



class UsuarioController {
  static service: UsuarioService;
  public constructor() {

        UsuarioController.service = new UsuarioService();
    }

    async listAllUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listAllUsuario(request.query);
        return response.status(200).json(data);
    }

    async createUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.create(request.body);
        return response.status(200).json(data);
    }

    async listUsuarioByCPF(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listUsuarioByCPF(request.params.cpf);
        return response.status(200).json(data);
    }

    async listUsuarioById(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listUsuarioById(request.params.cpf);
        return response.status(200).json(data);
    }

    async deleteUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.deleteUsuario(request.params.id);
        return response.status(200).json(data);
    }
    async updateUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.updateUsuario(request.params.id, request.body);
        return response.status(200).json(data);
    }
}

export { UsuarioController };