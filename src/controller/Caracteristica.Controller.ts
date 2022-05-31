import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CaracteristicaService } from '../service/Caracteristica.Service';

class CaracteristicaController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, tipoCaracteristicas } = request.body;
    const caracteristicaService = container.resolve(
      CaracteristicaService,
    );

    const data = await caracteristicaService.create(
      name,
      tipoCaracteristicas,
    );
    

    return response.status(201).json(data);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const caracteristicaService = container.resolve(CaracteristicaService);

    await caracteristicaService.delete(id);

    return response.status(204).json();
  }

  async list(request: Request, response: Response): Promise<any> {
    const caracteristicaService = container.resolve(CaracteristicaService);
    let data = await caracteristicaService.list(request.query);
    return response.status(200).json(data);
}  


  async listById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const caracteristicaService = container.resolve(
      CaracteristicaService,
    );
    const data = await caracteristicaService.listById(id);

    return response.status(200).json(data);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const caracteristicaService = container.resolve(CaracteristicaService);
    await caracteristicaService.update(id, name);

    return response.status(204).send();
  }


 }

export { CaracteristicaController };
