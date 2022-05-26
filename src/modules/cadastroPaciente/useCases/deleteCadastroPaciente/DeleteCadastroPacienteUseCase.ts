import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { ICadastroCaracteristicasRepository } from 'repository/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from 'repository/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
class DeleteCadastroPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private paciente: ICadastroPacienteRepository,

    @inject('CadastroCaracteristicasRepository')
    private caracteristicas: ICadastroCaracteristicasRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const paciente = await this.paciente.loadById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    await this.caracteristicas.delete(paciente.caracteristicas);
    await this.paciente.delete(id);
  }
}

export { DeleteCadastroPacienteUseCase };
