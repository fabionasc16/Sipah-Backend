import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { ICadastroPacienteRepository } from 'repository/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

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
