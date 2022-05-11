import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class LoadCadastroPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private cadastroPaciente: ICadastroPacienteRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = await this.cadastroPaciente.load();
    if (data.length === 0) {
      throw new AppError(Messages.NO_PACIENTES_REGISTERED, 404);
    }

    return data;
  }
}

export { LoadCadastroPacienteUseCase };
