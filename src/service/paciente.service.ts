import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
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

  async list(params: any) {
    const data = await this.pacienteRepository.list(params);
    if (data.length === 0) {
      throw new AppError(Messages.NO_PACIENTES_REGISTERED, 404);
    }

    return data;
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

  // async update(id: string, data: IRequest): Promise<void> {
  //   if (!id) {
  //     throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
  //   }

  //   // const paciente = await Paciente.findById({
  //   //   _id: new mongoose.Types.ObjectId(id),
  //   // });
  //   const paciente = await this.pacienteRepository.listById(id);

  //   if (!paciente) {
  //     throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
  //   }

  //   if (data.numProntuario !== '') {
  //     const numProntuarioExists = await Paciente.findOne({
  //       numProntuario: data.numProntuario,
  //     });

  //     if (numProntuarioExists) {
  //       if (numProntuarioExists._id.toString() !== id) {
  //         throw new AppError('Número de Prontuário já cadastrado');
  //       }
  //     }
  //   }

  //   paciente.dataEntrada = data.dataEntrada;

  //   paciente.horaEntrada = data.horaEntrada;

  //   paciente.numProntuario = data.numProntuario;

  //   paciente.entradaAtraves = data.entradaAtraves;

  //   paciente.statusRegistro = data.statusRegistro;

  //   paciente.statusPaciente = data.statusPaciente;

  //   paciente.nomePaciente = data.nomePaciente;

  //   paciente.nomeMae = data.nomeMae;

  //   paciente.dataNascimento = data.dataNascimento;

  //   paciente.rg = data.rg;

  //   paciente.cpf = data.cpf;

  //   paciente.cns = data.cns;

  //   paciente.nacionalidade = data.nacionalidade;

  //   paciente.pais = data.pais;

  //   paciente.estaturaAproximada = data.estaturaAproximada;

  //   paciente.pesoAproximado = data.pesoAproximado;

  //   paciente.idadeAproximada = data.idadeAproximada;

  //   paciente.condicoesEncontrada = data.condicoesEncontrada;

  //   paciente.localEncontrado = data.localEncontrado;

  //   paciente.sinaisParticulares = data.sinaisParticulares;

  //   paciente.acessoriosUtilizados = data.acessoriosUtilizados;

  //   paciente.vestimentas = data.vestimentas;

  //   paciente.barba = data.barba;

  //   paciente.bigode = data.bigode;

  //   paciente.bairroEncontrado = data.bairroEncontrado;

  //   paciente.deficiencia = data.deficiencia;

  //   paciente.naoInformaContato = data.naoInformaContato;

  //   paciente.nomeContato = data.nomeContato;

  //   paciente.grauParentescoSelected = data.grauParentescoSelected;

  //   paciente.telefoneContato = data.telefoneContato;

  //   paciente.cpfContato = data.cpfContato;

  //   paciente.genero = data.genero;

  //   paciente.generoOutro = data.generoOutro;

  //   paciente.unidade = data.unidade;

  //   paciente.nomeSocialPaciente = data.nomeSocialPaciente;

  //   paciente.apelidoPaciente = data.apelidoPaciente;

  //   paciente.vitimaAbandono = data.vitimaAbandono;

  //   paciente.querEncontro = data.querEncontro;

  //   paciente.autorizaConsulta = data.autorizaConsulta;

  //   paciente.numRegistroExterno = data.numRegistroExterno;

  //   paciente.unidadeSaudeOrigem = data.unidadeSaudeOrigem;

  //   paciente.conscienciaPaciente = data.conscienciaPaciente;

  //   paciente.transtornosPaciente = data.transtornosPaciente;

  //   paciente.tratamentoPsicologico = data.tratamentoPsicologico;

  //   paciente.descricaoEstadoPaciente = data.descricaoEstadoPaciente;

  //   paciente.dataIdentificacao = data.dataIdentificacao;

  //   paciente.meioIdentificacao = data.meioIdentificacao;

  //   paciente.tipoCaracteristicas = data.tipoCaracteristicas;

  //   await this.pacienteRepository.update(id, paciente);
  //   // update paciente
  //   // await this.pacienteRepository.update(id, paciente);

  //   // // se houver características alteradas
  //   // if (data.tipoCaracteristicas) {
  //   //   if (data.tipoCaracteristicas.length !== 0) {
  //   //     // limpa-se o vetor de características antigas
  //   //     for (let i = paciente.tipoCaracteristicas.length; i > 0; i -= 1) {
  //   //       paciente.tipoCaracteristicas.pop();
  //   //     }

  //   //     // insere as características novas
  //   //     await data.tipoCaracteristicas.map(async caracteristica => {
  //   //       await paciente.tipoCaracteristicas.push(caracteristica);
  //   //     });
  //   //     await paciente.save();
  //   //   }
  //   // }
  // }

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
