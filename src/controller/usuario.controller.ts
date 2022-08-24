import { Request, Response } from 'express';
import { AuthService } from 'service/auth.service';
import { UsuarioService } from 'service/usuario.service';

class UsuarioController {
  static service: UsuarioService;
  public constructor() {
    UsuarioController.service = new UsuarioService();
  }

  async listAllUsuario(request: Request, response: Response): Promise<any> {
    console.log('listAllUsuario - user');
    console.log(request.user);
    const userUnidadeID = request.user.unit_id;
    if (AuthService.checkRoles(AuthService.ROLES.ADMIN, request.user.roles)) {
      const data = await UsuarioController.service.listAllUsuario(
        request.query,
        '',
      );
      return response.status(200).json(data);
    }

    const data = await UsuarioController.service.listAllUsuario(
      request.query,
      userUnidadeID,
    );
    return response.status(200).json(data);
  }

  async createUsuario(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.create(request.body);
    return response.status(200).json(data);
  }

  async listUsuarioByCPF(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.listUsuarioByCPF(
      request.params.cpf,
    );
    return response.status(200).json(data);
  }

  async listUsuarioById(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.listUsuarioById(
      request.params.id,
    );
    return response.status(200).json(data);
  }

  async deleteUsuario(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.deleteUsuario(
      request.params.id,
    );
    return response.status(200).json(data);
  }
  async updateUsuario(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.updateUsuario(
      request.params.id,
      request.body,
    );
    return response.status(200).json(data);
  }

  async mudarStatus(request: Request, response: Response): Promise<any> {
    const data = await UsuarioController.service.mudarStatus(request.params.id);
    return response.status(200).json(data);
  }
}

export { UsuarioController };
