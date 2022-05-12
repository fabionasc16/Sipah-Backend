import { CreateCorCabeloUseCase } from '@modules/corCabelo/useCases/createCorCabelo/CreateCorCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCorCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cor_cabelo } = request.body;
    const createCorCabeloUseCase = container.resolve(CreateCorCabeloUseCase);
    const data = await createCorCabeloUseCase.execute(cor_cabelo);

    return response.status(201).json(data);
  }
}

export { CreateCorCabeloController };
