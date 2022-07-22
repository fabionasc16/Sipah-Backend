import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

import { IPacienteRepository } from '../repository/IPacienteRepository';

@injectable()
class UnidadeSaudeService {
  constructor(
    @inject('PacienteRepository')
    private pacienteRepository: IPacienteRepository,
  ) {}

  async create(data: any): Promise<any> {
    const cadastroPaciente = await this.pacienteRepository.create(data);
    return cadastroPaciente;
  }

  async list(params: any) {
    const data = await this.pacienteRepository.list(params);
    if (data.length === 0) {
      throw new AppError(Messages.NO_PACIENTES_REGISTERED, 404);
    }

    return data;
  }

  async listById(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const patient = await this.pacienteRepository.listById(id);
    if (!patient) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return patient;
  }

  async listByField(params: any): Promise<any> {
    if (!params) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const patient = await this.pacienteRepository.listByField(params);
    if (!patient) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return patient;
  }

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID da Unidade de Saúde`,
      );
    }

    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    await this.pacienteRepository.delete(id);
  }

  async update(id: string, data: any): Promise<void> {
    return this.pacienteRepository.update(id, data);
  }
}

export { UnidadeSaudeService };
