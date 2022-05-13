import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadImagensPacienteUseCase } from './UploadImagensPacienteUseCase';

class UploadImagensPacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { arquivos } = request;
    const { pacienteid } = request.params;
    const importFile = container.resolve(UploadImagensPacienteUseCase);

    const fileNames: string[] = [];
    for (let i = 0; i < request.files.length; i++) {
      fileNames.push(`./images/${request.files[i].filename}`);
    }

    return response.status(200).send();
  }
}

export { UploadImagensPacienteController };
