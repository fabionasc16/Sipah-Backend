import { AppError } from 'AppError';
import { response } from 'express';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
import moment from 'moment';
import mongoose from 'mongoose';
import { injectable, inject } from 'tsyringe';

import { IPacienteRepository } from '../repository/IPacienteRepository';

interface IRequest {
  dataEntrada: string;
  horaEntrada: string;
  numProntuario: string;
  entradaAtraves: string;
  statusRegistro: string;
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
  tipoCaracteristicas: any;
}

@injectable()
class PacienteService {
  constructor(
    @inject('PacienteRepository')
    private pacienteRepository: IPacienteRepository,
  ) {}

  async create(data: IRequest): Promise<any> {
    try {
      if (!data.numProntuario || data.numProntuario === '') {
        throw new AppError('Preencha o Número de Prontuário');
      }

      if (data.numProntuario !== '') {
        const numProntuarioExists = await Paciente.findOne({
          numProntuario: data.numProntuario,
        });

        if (numProntuarioExists) {
          throw new AppError('Número de Prontuário já cadastrado');
        }
      }

      const cadastroPaciente = await this.pacienteRepository.create({
        dataEntrada: data.dataEntrada,
        horaEntrada: data.horaEntrada,
        numProntuario: data.numProntuario,
        entradaAtraves: data.entradaAtraves,
        statusRegistro: '1',
        nomePaciente: data.nomePaciente,
        nomeMae: data.nomeMae,
        dataNascimento: data.dataNascimento,
        rg: data.rg,
        cpf: data.cpf,
        cns: data.cns,
        nacionalidade: data.nacionalidade,
        pais: data.pais,
        estaturaAproximada: data.estaturaAproximada,
        pesoAproximado: data.pesoAproximado,
        idadeAproximada: data.idadeAproximada,
        condicoesEncontrada: data.condicoesEncontrada,
        localEncontrado: data.localEncontrado,
        sinaisParticulares: data.sinaisParticulares,
        acessoriosUtilizados: data.acessoriosUtilizados,
        vestimentas: data.vestimentas,
        barba: data.barba,
        bigode: data.bigode,
        bairroEncontrado: data.bairroEncontrado,
        deficiencia: data.deficiencia,
        naoInformaContato: data.naoInformaContato,
        nomeContato: data.nomeContato,
        grauParentescoSelected: data.grauParentescoSelected,
        telefoneContato: data.telefoneContato,
        cpfContato: data.cpfContato,
        genero: data.genero,
        generoOutro: data.generoOutro,
        unidade: data.unidade,
        nomeSocialPaciente: data.nomeSocialPaciente,
        apelidoPaciente: data.apelidoPaciente,
        vitimaAbandono: data.vitimaAbandono,
        querEncontro: data.querEncontro,
        autorizaConsulta: data.autorizaConsulta,
        numRegistroExterno: data.numRegistroExterno,
        unidadeSaudeOrigem: data.unidadeSaudeOrigem,
        conscienciaPaciente: data.conscienciaPaciente,
        transtornosPaciente: data.transtornosPaciente,
        tratamentoPsicologico: data.tratamentoPsicologico,
        descricaoEstadoPaciente: data.descricaoEstadoPaciente,
      });

      // const paciente = await Paciente.findById({
      //   _id: new mongoose.Types.ObjectId(cadastroPaciente._id),
      // });

      // if (data.nomePaciente) {
      //   paciente.nomePaciente = data.nomePaciente;
      // }

      // if (data.nomeMae) {
      //   paciente.nomeMae = data.nomeMae;
      // }

      // if (data.dataNascimento) {
      //   paciente.dataNascimento = data.dataNascimento;
      // }

      // if (data.rg) {
      //   paciente.rg = data.rg;
      // }

      // if (data.cpf) {
      //   paciente.cpf = data.cpf;
      // }

      // if (data.cns) {
      //   paciente.cns = data.cns;
      // }

      // if (data.nacionalidade) {
      //   paciente.nacionalidade = data.nacionalidade;
      // }

      // if (data.pais) {
      //   paciente.pais = data.pais;
      // }

      // if (data.estaturaAproximada) {
      //   paciente.estaturaAproximada = parseFloat(data.estaturaAproximada);
      // }

      // if (data.pesoAproximado) {
      //   paciente.pesoAproximado = parseFloat(data.pesoAproximado);
      // }

      // if (data.idadeAproximada) {
      //   paciente.idadeAproximada = parseInt(data.idadeAproximada, 10);
      // }

      // if (data.condicoesEncontrada) {
      //   paciente.condicoesEncontrada = data.condicoesEncontrada;
      // }

      // if (data.localEncontrado) {
      //   paciente.localEncontrado = data.localEncontrado;
      // }

      // if (data.sinaisParticulares) {
      //   paciente.sinaisParticulares = data.sinaisParticulares;
      // }

      // if (data.acessoriosUtilizados) {
      //   paciente.acessoriosUtilizados = data.acessoriosUtilizados;
      // }

      // if (data.vestimentas) {
      //   paciente.vestimentas = data.vestimentas;
      // }

      // if (data.barba) {
      //   paciente.barba = data.barba;
      // }

      // if (data.bigode) {
      //   paciente.bigode = data.bigode;
      // }

      // if (data.bairroEncontrado) {
      //   paciente.bairroEncontrado = data.bairroEncontrado;
      // }

      // if (data.deficiencia) {
      //   paciente.deficiencia = data.deficiencia;
      // }

      // if (data.naoInformaContato) {
      //   paciente.naoInformaContato = data.naoInformaContato;
      // }

      // if (data.nomeContato) {
      //   paciente.nomeContato = data.nomeContato;
      // }

      // if (data.grauParentescoSelected) {
      //   paciente.grauParentescoSelected = data.grauParentescoSelected;
      // }

      // if (data.telefoneContato) {
      //   paciente.telefoneContato = data.telefoneContato;
      // }

      // if (data.cpfContato) {
      //   paciente.cpfContato = data.cpfContato;
      // }

      // if (data.genero) {
      //   paciente.genero = data.genero;
      // }

      // if (data.generoOutro) {
      //   paciente.generoOutro = data.generoOutro;
      // }

      // if (data.unidade) {
      //   paciente.unidade = data.unidade;
      // }

      // if (data.nomeSocialPaciente) {
      //   paciente.nomeSocialPaciente = data.nomeSocialPaciente;
      // }

      // if (data.apelidoPaciente) {
      //   paciente.apelidoPaciente = data.apelidoPaciente;
      // }

      // if (data.vitimaAbandono) {
      //   paciente.vitimaAbandono = data.vitimaAbandono;
      // }

      // if (data.querEncontro) {
      //   paciente.querEncontro = data.querEncontro;
      // }

      // if (data.autorizaConsulta) {
      //   paciente.autorizaConsulta = data.autorizaConsulta;
      // }

      // if (data.numRegistroExterno) {
      //   paciente.numRegistroExterno = data.numRegistroExterno;
      // }

      // if (data.unidadeSaudeOrigem) {
      //   paciente.unidadeSaudeOrigem = data.unidadeSaudeOrigem;
      // }

      // if (data.conscienciaPaciente) {
      //   paciente.conscienciaPaciente = data.conscienciaPaciente;
      // }

      // if (data.transtornosPaciente) {
      //   paciente.transtornosPaciente = data.transtornosPaciente;
      // }

      // if (data.tratamentoPsicologico) {
      //   paciente.tratamentoPsicologico = data.tratamentoPsicologico;
      // }

      // if (data.descricaoEstadoPaciente) {
      //   paciente.descricaoEstadoPaciente = data.descricaoEstadoPaciente;
      // }

      // if (data.tipoCaracteristicas) {
      //   await data.tipoCaracteristicas.map(async caracteristica => {
      //     await paciente.tipoCaracteristicas.push(caracteristica);

      //     await paciente.save();
      //   });
      // } else {
      //   await paciente.save();
      // }

      return cadastroPaciente;
    } catch (e) {
      throw new AppError(e.message, 500);
    }
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

  async update(id: string, data: IRequest): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Paciente`);
    }

    // const paciente = await Paciente.findById({
    //   _id: new mongoose.Types.ObjectId(id),
    // });
    const paciente = await this.pacienteRepository.listById(id);

    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    if (data.numProntuario !== '') {
      const numProntuarioExists = await Paciente.findOne({
        numProntuario: data.numProntuario,
      });

      if (numProntuarioExists) {
        if (numProntuarioExists._id.toString() !== id) {
          throw new AppError('Número de Prontuário já cadastrado');
        }
      }
    }

    if (data.dataEntrada) {
      paciente.dataEntrada = data.dataEntrada;
    }

    if (data.horaEntrada) {
      paciente.horaEntrada = data.horaEntrada;
    }

    if (data.numProntuario) {
      paciente.numProntuario = data.numProntuario;
    }

    if (data.entradaAtraves) {
      paciente.entradaAtraves = data.entradaAtraves;
    }

    if (data.statusRegistro) {
      paciente.statusRegistro = data.statusRegistro;
    }

    if (data.nomePaciente) {
      paciente.nomePaciente = data.nomePaciente;
    }

    if (data.nomeMae) {
      paciente.nomeMae = data.nomeMae;
    }

    if (data.dataNascimento) {
      paciente.dataNascimento = data.dataNascimento;
    }

    if (data.rg) {
      paciente.rg = data.rg;
    }

    if (data.cpf) {
      paciente.cpf = data.cpf;
    }

    if (data.cns) {
      paciente.cns = data.cns;
    }

    if (data.nacionalidade) {
      paciente.nacionalidade = data.nacionalidade;
    }

    if (data.pais) {
      paciente.pais = data.pais;
    }

    if (data.estaturaAproximada) {
      paciente.estaturaAproximada = data.estaturaAproximada;
    }

    if (data.pesoAproximado) {
      paciente.pesoAproximado = data.pesoAproximado;
    }

    if (data.idadeAproximada) {
      paciente.idadeAproximada = data.idadeAproximada;
    }

    if (data.condicoesEncontrada) {
      paciente.condicoesEncontrada = data.condicoesEncontrada;
    }

    if (data.localEncontrado) {
      paciente.localEncontrado = data.localEncontrado;
    }

    if (data.sinaisParticulares) {
      paciente.sinaisParticulares = data.sinaisParticulares;
    }

    if (data.acessoriosUtilizados) {
      paciente.acessoriosUtilizados = data.acessoriosUtilizados;
    }

    if (data.vestimentas) {
      paciente.vestimentas = data.vestimentas;
    }

    if (data.barba) {
      paciente.barba = data.barba;
    }

    if (data.bigode) {
      paciente.bigode = data.bigode;
    }

    if (data.bairroEncontrado) {
      paciente.bairroEncontrado = data.bairroEncontrado;
    }

    if (data.deficiencia) {
      paciente.deficiencia = data.deficiencia;
    }

    if (data.naoInformaContato) {
      paciente.naoInformaContato = data.naoInformaContato;
    }

    if (data.nomeContato) {
      paciente.nomeContato = data.nomeContato;
    }

    if (data.grauParentescoSelected) {
      paciente.grauParentescoSelected = data.grauParentescoSelected;
    }

    if (data.telefoneContato) {
      paciente.telefoneContato = data.telefoneContato;
    }

    if (data.cpfContato) {
      paciente.cpfContato = data.cpfContato;
    }

    if (data.genero) {
      paciente.genero = data.genero;
    }

    if (data.generoOutro) {
      paciente.generoOutro = data.generoOutro;
    }

    if (data.unidade) {
      paciente.unidade = data.unidade;
    }

    if (data.nomeSocialPaciente) {
      paciente.nomeSocialPaciente = data.nomeSocialPaciente;
    }

    if (data.apelidoPaciente) {
      paciente.apelidoPaciente = data.apelidoPaciente;
    }

    if (data.vitimaAbandono) {
      paciente.vitimaAbandono = data.vitimaAbandono;
    }

    if (data.querEncontro) {
      paciente.querEncontro = data.querEncontro;
    }

    if (data.autorizaConsulta) {
      paciente.autorizaConsulta = data.autorizaConsulta;
    }

    if (data.numRegistroExterno) {
      paciente.numRegistroExterno = data.numRegistroExterno;
    }

    if (data.unidadeSaudeOrigem) {
      paciente.unidadeSaudeOrigem = data.unidadeSaudeOrigem;
    }

    if (data.conscienciaPaciente) {
      paciente.conscienciaPaciente = data.conscienciaPaciente;
    }

    if (data.transtornosPaciente) {
      paciente.transtornosPaciente = data.transtornosPaciente;
    }

    if (data.tratamentoPsicologico) {
      paciente.tratamentoPsicologico = data.tratamentoPsicologico;
    }

    if (data.descricaoEstadoPaciente) {
      paciente.descricaoEstadoPaciente = data.descricaoEstadoPaciente;
    }

    if (data.tipoCaracteristicas) {
      paciente.tipoCaracteristicas = data.tipoCaracteristicas;
    }

    await this.pacienteRepository.update(id, paciente);
    // update paciente
    // await this.pacienteRepository.update(id, paciente);

    // // se houver características alteradas
    // if (data.tipoCaracteristicas) {
    //   if (data.tipoCaracteristicas.length !== 0) {
    //     // limpa-se o vetor de características antigas
    //     for (let i = paciente.tipoCaracteristicas.length; i > 0; i -= 1) {
    //       paciente.tipoCaracteristicas.pop();
    //     }

    //     // insere as características novas
    //     await data.tipoCaracteristicas.map(async caracteristica => {
    //       await paciente.tipoCaracteristicas.push(caracteristica);
    //     });
    //     await paciente.save();
    //   }
    // }
  }

  async uploadImage(id: string, arquivo: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Paciente`);
    }
    const paciente = await this.pacienteRepository.listById(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    const response = await this.pacienteRepository.uploadImage(
      id,
      `./images/${arquivo}`,
    );

    return response;
  }
}

export { PacienteService };
