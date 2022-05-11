import { CreateTipoCabeloUseCase } from '@modules/tipoCabelo/useCases/createTipoCabelo/CreateTipoCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateTipoCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const nameTipoCabelo = request.body;
    const createTipoCabeloUseCase = container.resolve(CreateTipoCabeloUseCase);
    const data = await createTipoCabeloUseCase.execute(nameTipoCabelo);

    return response.status(200).json(data);
  }
}

export { CreateTipoCabeloController };
