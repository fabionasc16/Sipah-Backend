import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LoadCadastroPacienteByIdUseCase } from './LoadCadastroPacienteByIdUseCase';

class LoadCadastroPacienteByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const load = container.resolve(LoadCadastroPacienteByIdUseCase);

    const paciente = await load.execute(id);
    return response.status(200).json({ acknowledge: true, content: paciente });
  }
}

export { LoadCadastroPacienteByIdController };
