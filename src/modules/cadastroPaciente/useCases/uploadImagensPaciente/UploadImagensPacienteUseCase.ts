import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UploadImagensPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private paciente: ICadastroPacienteRepository,
  ) {}
  async execute(pacienteid: string, arquivos: string[]): Promise<void> {}
}

export { UploadImagensPacienteUseCase };
