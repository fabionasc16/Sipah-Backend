import { CreateCorCabeloUseCase } from '@modules/corCabelo/useCases/createCorCabelo/CreateCorCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCorCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const nameCorCabelo = request.body;
    const createCorCabeloUseCase = container.resolve(CreateCorCabeloUseCase);
    const data = await createCorCabeloUseCase.execute(nameCorCabelo);

    return response.status(200).json(data);
  }
}

export { CreateCorCabeloController };
