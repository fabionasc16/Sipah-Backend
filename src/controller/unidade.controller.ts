import { Request, Response } from 'express';
import { UnidadeService } from 'service/unidade.service';
import { container } from 'tsyringe';

class UnidadeController {
  async create(request: Request, response: Response): Promise<any> {
    const result = container.resolve(UnidadeService);
    const data = await result.create(request.body);
    return response.status(200).json(data);
  }

  async list(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeService);
    const data = await service.list(request);
    return response.status(200).json(data);
  }

  async listById(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeService);
    const data = await service.listById(request.params.id);
    return response.status(200).json(data);
  }

  async listByCNPJ(request: Request, response: Response): Promise<any> {
    const service = container.resolve(UnidadeService);
    const data = await service.listByCNPJ(request.params.id);
    return response.status(200).json(data);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UnidadeService);
    const { id } = request.params;
    const unidade = request.body;

    try {
      const result = await service.update(id, unidade);
      return response
        .status(200)
        .json({ acknowledge: true, status: 'updated', content: result });
    } catch (error) {
      return response.status(404).send(error.message);
    }
  }

  async delete(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const service = container.resolve(UnidadeService);

    const data = await service.delete(id);
    return response.status(200).json(data);
  }
}

export { UnidadeController };
