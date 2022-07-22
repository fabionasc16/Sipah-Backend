import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
import { inject, injectable } from 'tsyringe';

import { IPacienteRepository } from '../repository/IPacienteRepository';

@injectable()
class PacienteService {
  constructor(
    @inject('PacienteRepository')
    private pacienteRepository: IPacienteRepository,
  ) {}

  async create(data: any): Promise<any> {
    const cadastroPaciente = await this.pacienteRepository.create(data);
    return cadastroPaciente;
  }

  async listsearch(params: any) {
    const data = await this.pacienteRepository.listsearch(params);
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

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    await this.pacienteRepository.delete(id);
  }

  async uploadImage(id: string, arquivo: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return this.pacienteRepository.uploadImage(id, arquivo);
  }

  async loadImage(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return this.pacienteRepository.loadImage(id);
  }

  async loadImageById(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID da Imagem`);
    }

    const imagem = await this.pacienteRepository.loadImageById(id);
    if (!imagem) {
      throw new AppError(Messages.IMAGEM_NOT_FOUND, 404);
    }

    return imagem;
  }

  async deleteImage(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID da Imagem`);
    }

    await this.pacienteRepository.deleteImage(id);
  }

  async uploadTermo(id: string, arquivo: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return this.pacienteRepository.uploadTermo(id, arquivo);
  }

  async loadTermo(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return this.pacienteRepository.loadTermo(id);
  }

  async update(id: string, data: any): Promise<void> {
    return this.pacienteRepository.update(id, data);
  }

  async loadTermoById(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Termo`);
    }

    const termo = await this.pacienteRepository.loadTermoById(id);
    if (!termo) {
      throw new AppError(Messages.IMAGEM_NOT_FOUND, 404);
    }

    return termo;
  }

  async deleteTermo(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Termo`);
    }

    await this.pacienteRepository.deleteTermo(id);
  }
}

export { PacienteService };
