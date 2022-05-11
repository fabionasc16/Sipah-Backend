import { CreateCorteCabeloUseCase } from '@modules/corteCabelo/useCases/createCorteCabelo/CreateCorteCabeloUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCorteCabeloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const nameCorteCabelo = request.body;
    const createCorteCabeloUseCase = container.resolve(
      CreateCorteCabeloUseCase,
    );
    const data = await createCorteCabeloUseCase.execute(nameCorteCabelo);

    return response.status(200).json(data);
  }
}

export { CreateCorteCabeloController };
