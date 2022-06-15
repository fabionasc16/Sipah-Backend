import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TipoCaracteristicaSerice } from "../service/TipoCaracteristica.Service"

class TipoCaracteristicaController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, id } = request.body;
    const tipoCaracteristicaService = container.resolve(
      TipoCaracteristicaSerice,
    );
    const data = await tipoCaracteristicaService.create(name, id);

    return response.status(201).json(data);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const tipoCaracteristicaService = container.resolve(TipoCaracteristicaSerice);

    await tipoCaracteristicaService.delete(id);

    return response.status(204).json();
  }

  async list(request: Request, response: Response): Promise<any> {
    const tipoCaracteristicaService = container.resolve(TipoCaracteristicaSerice);
    let data = await tipoCaracteristicaService.list(request.query);
    return response.status(200).json(data);
}  

  async listById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const tipoCaracteristicaService = container.resolve(
      TipoCaracteristicaSerice,
    );
    const data = await tipoCaracteristicaService.listById(id);

    return response.status(200).json(data);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name} = request.body;

    const tipoCaracteristicaService = container.resolve(TipoCaracteristicaSerice);
    await tipoCaracteristicaService.update(id, name);

    return response.status(204).send();
  }

}

export { TipoCaracteristicaController };
