import { AppError } from 'AppError';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
import { ParsedQs } from 'qs';
import { inject, injectable } from 'tsyringe';

import { IPacienteRepository } from '../repository/IPacienteRepository';

interface IRequest {
  dataEntrada: string;
  horaEntrada: string;
  numProntuario: string;
  entradaAtraves: string;
  statusRegistro: string;
  statusPaciente?: string;
  nomePaciente?: string;
  nomeMae?: string;
  dataNascimento?: string;
  rg?: string;
  cpf?: string;
  cns?: string;
  nacionalidade?: string;
  pais?: string;
  estaturaAproximada?: string;
  pesoAproximado?: string;
  idadeAproximada?: string;
  condicoesEncontrada?: string;
  localEncontrado?: string;
  sinaisParticulares?: string;
  acessoriosUtilizados?: string;
  vestimentas?: string;
  barba?: string;
  bigode?: string;
  bairroEncontrado?: string;
  deficiencia?: string;
  naoInformaContato?: boolean;
  nomeContato?: string;
  grauParentescoSelected?: string;
  telefoneContato?: string;
  cpfContato?: string;
  genero?: string;
  generoOutro?: string;
  unidade?: string;
  nomeSocialPaciente?: string;
  apelidoPaciente?: string;
  vitimaAbandono?: string;
  querEncontro?: string;
  autorizaConsulta?: string;
  numRegistroExterno?: string;
  unidadeSaudeOrigem?: string;
  conscienciaPaciente?: string;
  transtornosPaciente?: string;
  tratamentoPsicologico?: string;
  descricaoEstadoPaciente?: string;
  dataIdentificacao?: string;
  meioIdentificacao?: string;
  tipoCaracteristicas: any;
}

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

  async listSearchOut(params: any) {
    const data = await this.pacienteRepository.listSearchOut(params);
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

  async listByExternalId(externalId: string): Promise<any> {
    if (!externalId) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID Externo`);
    }

    const patient = await this.pacienteRepository.listByExternalId(externalId);
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

  async loadImageByIdOpen(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID da Imagem`);
    }

    const imagem = await this.pacienteRepository.loadImageByIdOpen(id);
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

  async listByIdTransfer(id: string): Promise<any> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    const patient = await this.pacienteRepository.listByIdTransfer(id);
    if (!patient) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    return patient;
  }

  async listsearchByUS(request: any, unit_id: string) {
    const data = await this.pacienteRepository.listsearchByUS(request, unit_id);
    if (data.length === 0) {
      throw new AppError(Messages.NO_PACIENTES_REGISTERED, 404);
    }

    return data;
  }  
  async listsearchByUSStatusCadastrado(request: any, unit_id: string) {
    const data = await this.pacienteRepository.listsearchByUSStatusCadastrado(request, unit_id);
    if (data.length === 0) {
      throw new AppError(Messages.NO_PACIENTES_REGISTERED, 404);
    }

    return data;
  }
}

export { PacienteService };
