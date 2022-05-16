import { paciente } from '@modules/cadastroPaciente/models/Paciente.model';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class UploadImagensPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private paciente: ICadastroPacienteRepository,
  ) {}
  async execute(pacienteid: string, arquivo: string): Promise<void> {
    if (!pacienteid) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.paciente.loadById(pacienteid);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    const response = await this.paciente.uploadImage(
      pacienteid,
      `./images/${arquivo}`,
    );

    return response;
  }
}

export { UploadImagensPacienteUseCase };
