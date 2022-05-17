import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LoadCadastroPacienteUseCase } from './LoadCadastroPacienteUseCase';

class LoadCadastroPacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const load = container.resolve(LoadCadastroPacienteUseCase);
    const data = await load.execute();

    return response.status(200).json(data);
  }
}

export { LoadCadastroPacienteController };
