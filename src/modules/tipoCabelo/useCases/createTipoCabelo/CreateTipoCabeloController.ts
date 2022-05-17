import { CreateTipoCabeloUseCase } from '@modules/tipoCabelo/useCases/createTipoCabelo/CreateTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tipo_cabelo } = request.body;
    const createTipoCabeloUseCase = container.resolve(CreateTipoCabeloUseCase);
    const data = await createTipoCabeloUseCase.execute(tipo_cabelo);

    return response.status(201).json(data);
  }
}

export { CreateTipoCabeloController };
