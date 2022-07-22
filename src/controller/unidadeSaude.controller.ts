import { Request, Response } from 'express';
import { UnidadeSaudeService } from 'service/unidadeSaude.service';
import { container } from 'tsyringe';

class UnidadeSaudeController {
  async list(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeSaudeService);
    const data = await service.list(request.query);
    return response.status(200).json(data);
  }

  async listByField(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeSaudeService);
    const data = await service.listByField(request.params);
    return response.status(200).json(data);
  }

  async listById(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeSaudeService);
    const data = await service.listById(request.params.id);
    return response.status(200).json(data);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UnidadeSaudeService);
    const { id } = request.params;
    const paciente = request.body;

    try {
      const result = await service.update(id, paciente);
      return response
        .status(200)
        .json({ acknowledge: true, status: 'updated', content: result });
    } catch (error) {
      return response.status(404).send(error.message);
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(UnidadeSaudeService);

    await service.delete(id);
    return response.status(204).send();
  }
}

export { UnidadeSaudeController };
