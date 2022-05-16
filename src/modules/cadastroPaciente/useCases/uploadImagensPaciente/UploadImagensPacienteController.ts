import { paciente } from '@modules/cadastroPaciente/models/Paciente.model';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadImagensPacienteUseCase } from './UploadImagensPacienteUseCase';

class UploadImagensPacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const arquivos = request;
    const { pacienteid } = request.params;
    const importFile = container.resolve(UploadImagensPacienteUseCase);

    const filename = `${pacienteid}-${arquivos.file.originalname}`;
    await importFile.execute(pacienteid, filename);

    return response.status(201).send({
      message: 'Successfully uploaded',
    });
  }
}

export { UploadImagensPacienteController };
