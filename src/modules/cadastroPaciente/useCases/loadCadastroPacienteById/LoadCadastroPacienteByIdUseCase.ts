import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class LoadCadastroPacienteByIdUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private paciente: ICadastroPacienteRepository,
  ) {}

  async execute(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const load = await this.paciente.loadById(id);
    if (!load) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return load;
  }
}

export { LoadCadastroPacienteByIdUseCase };
