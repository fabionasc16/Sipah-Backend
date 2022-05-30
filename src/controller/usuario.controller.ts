import { ListAllUsuarioUseCase } from '@modules/usuario/ListAllUsuarioUseCase';
import { UsuarioService } from 'service/usuario.service';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UsuarioController {
    static service: UsuarioService;

    public constructor() {

        UsuarioController.service = new UsuarioService()
    }

    async listAllUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listAllUsuario(request.query);
        return response.status(200).json(data);
    }   
    
    async createUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.create(request.query);
        return response.status(200).json(data);
    }
    
    async listUsuarioByCPF(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listUsuarioByCPF(request.query);
        return response.status(200).json(data);
    }
    
    async  listUsuarioById(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.listUsuarioById(request.query);
        return response.status(200).json(data);
    }

    async  deleteUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.deleteUsuario(request.query);
        return response.status(200).json(data);
    }
    async  updateUsuario(request: Request, response: Response): Promise<any> {
        let data = await UsuarioController.service.updateUsuario(request.query);
        return response.status(200).json(data);
    }
}

export { UsuarioController };