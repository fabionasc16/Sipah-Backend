import { Paciente } from 'model/Paciente.model';
import { termoPaciente } from 'model/TermosPaciente.model';
import moment from 'moment';
import mongoose from 'mongoose';

import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';
import { imagensPaciente } from '../model/ImagensPaciente.model';
import { IPacienteRepository } from './IPacienteRepository';

class PacienteRepository implements IPacienteRepository {
  // async create(data: ICreatePacienteDTO): Promise<any> {
  async create(data: any): Promise<any> {
    // data.dataEntrada = await moment(data.dataEntrada).format('YYYY-MM-DD');
    // data.horaEntrada = await moment(data.horaEntrada).format('HH:mm:ss');
    const cadastroPaciente = await Paciente.create(data);

    return cadastroPaciente;
  }

  async listsearch(params: any): Promise<any> {
    const page =
      params.query.currentPage != null ? `${params.query.currentPage}` : '1';
    const pageSize = params.query.perPage != null ? params.query.perPage : '10';
    const search = params.query.search != null ? params.query.search : '';
    let term = {};
    // Caso a uma palavra para busca seja enviada
    if (search) {
      term = {
        $or: [
          { nomePaciente: search },
          { cpf: search },
          { entradaAtraves: search },
          { numProntuario: search },
        ],
      };
    }

    const $and = [];

    if (params.body.dataEntrada) {
      if (params.body.dataEntrada !== '') {
        $and.push({ dataEntrada: params.body.dataEntrada });
      }
    }

    if (params.body.horaEntrada) {
      if (params.body.horaEntrada !== '') {
        $and.push({ horaEntrada: params.body.horaEntrada });
      }
    }

    if (params.body.numProntuario) {
      if (params.body.numProntuario !== '') {
        $and.push({ numProntuario: params.body.numProntuario });
      }
    }

    if (params.body.entradaAtraves) {
      if (params.body.entradaAtraves !== '') {
        $and.push({ entradaAtraves: params.body.entradaAtraves });
      }
    }

    if (params.body.statusRegistro) {
      if (params.body.statusRegistro !== '') {
        $and.push({ statusRegistro: params.body.statusRegistro });
      }
    }

    if (params.body.statusPaciente) {
      if (params.body.statusPaciente !== '') {
        $and.push({ statusPaciente: params.body.statusPaciente });
      }
    }

    if (params.body.nomePaciente) {
      if (params.body.nomePaciente !== '') {
        $and.push({ nomePaciente: params.body.nomePaciente });
      }
    }

    if (params.body.nomeMae) {
      if (params.body.nomeMae !== '') {
        $and.push({ nomeMae: params.body.nomeMae });
      }
    }

    if (params.body.dataNascimento) {
      if (params.body.dataNascimento !== '') {
        $and.push({ dataNascimento: params.body.dataNascimento });
      }
    }

    if (params.body.rg) {
      if (params.body.rg !== '') {
        $and.push({ rg: params.body.rg });
      }
    }

    if (params.body.cpf) {
      if (params.body.cpf !== '') {
        $and.push({ cpf: params.body.cpf });
      }
    }

    if (params.body.cns) {
      if (params.body.cns !== '') {
        $and.push({ cns: params.body.cns });
      }
    }

    if (params.body.nacionalidade) {
      if (params.body.nacionalidade !== '') {
        $and.push({ nacionalidade: params.body.nacionalidade });
      }
    }

    if (params.body.pais) {
      if (params.body.pais !== '') {
        $and.push({ pais: params.body.pais });
      }
    }

    if (params.body.estaturaAproximada) {
      if (params.body.estaturaAproximada !== '') {
        const min = Number(params.body.estaturaAproximada) - 0.3;
        const max = Number(params.body.estaturaAproximada) + 0.3;
        $and.push({
          estaturaAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.pesoAproximado) {
      if (params.body.pesoAproximado !== '') {
        const min = Number(params.body.pesoAproximado) - 5;
        const max = Number(params.body.pesoAproximado) + 5;
        $and.push({
          pesoAproximado: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.idadeAproximada) {
      if (params.body.idadeAproximada !== '') {
        const min = Number(params.body.idadeAproximada) - 5;
        const max = Number(params.body.idadeAproximada) + 5;
        $and.push({
          idadeAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.condicoesEncontrada) {
      if (params.body.condicoesEncontrada !== '') {
        $and.push({ condicoesEncontrada: params.body.condicoesEncontrada });
      }
    }

    if (params.body.localEncontrado) {
      if (params.body.localEncontrado !== '') {
        $and.push({ localEncontrado: params.body.localEncontrado });
      }
    }

    if (params.body.sinaisParticulares) {
      if (params.body.sinaisParticulares !== '') {
        $and.push({ sinaisParticulares: params.body.sinaisParticulares });
      }
    }

    if (params.body.acessoriosUtilizados) {
      if (params.body.acessoriosUtilizados !== '') {
        $and.push({ acessoriosUtilizados: params.body.acessoriosUtilizados });
      }
    }

    if (params.body.vestimentas) {
      if (params.body.vestimentas !== '') {
        $and.push({ vestimentas: params.body.vestimentas });
      }
    }

    if (params.body.barba) {
      if (params.body.barba !== '') {
        $and.push({ barba: params.body.barba });
      }
    }

    if (params.body.bigode) {
      if (params.body.bigode !== '') {
        $and.push({ bigode: params.body.bigode });
      }
    }

    if (params.body.bairroEncontrado) {
      if (params.body.bairroEncontrado !== '') {
        $and.push({ bairroEncontrado: params.body.bairroEncontrado });
      }
    }

    if (params.body.deficiencia) {
      if (params.body.deficiencia !== '') {
        $and.push({ deficiencia: params.body.deficiencia });
      }
    }

    if (params.body.naoInformaContato) {
      if (params.body.naoInformaContato !== '') {
        $and.push({ naoInformaContato: params.body.naoInformaContato });
      }
    }

    if (params.body.nomeContato) {
      if (params.body.nomeContato !== '') {
        $and.push({ nomeContato: params.body.nomeContato });
      }
    }

    if (params.body.grauParentescoSelected) {
      if (params.body.grauParentescoSelected !== '') {
        $and.push({
          grauParentescoSelected: params.body.grauParentescoSelected,
        });
      }
    }

    if (params.body.telefoneContato) {
      if (params.body.telefoneContato !== '') {
        $and.push({ telefoneContato: params.body.telefoneContato });
      }
    }

    if (params.body.cpfContato) {
      if (params.body.cpfContato !== '') {
        $and.push({ cpfContato: params.body.cpfContato });
      }
    }

    if (params.body.genero) {
      if (params.body.genero !== '') {
        $and.push({ genero: params.body.genero });
      }
    }

    if (params.body.generoOutro) {
      if (params.body.generoOutro !== '') {
        $and.push({ generoOutro: params.body.generoOutro });
      }
    }

    if (params.body.unidade) {
      if (params.body.unidade !== '') {
        $and.push({ unidade: params.body.unidade });
      }
    }

    if (params.body.nomeSocialPaciente) {
      if (params.body.nomeSocialPaciente !== '') {
        $and.push({ nomeSocialPaciente: params.body.nomeSocialPaciente });
      }
    }

    if (params.body.apelidoPaciente) {
      if (params.body.apelidoPaciente !== '') {
        $and.push({ apelidoPaciente: params.body.apelidoPaciente });
      }
    }

    if (params.body.vitimaAbandono) {
      if (params.body.vitimaAbandono !== '') {
        $and.push({ vitimaAbandono: params.body.vitimaAbandono });
      }
    }

    if (params.body.querEncontro) {
      if (params.body.querEncontro !== '') {
        $and.push({ querEncontro: params.body.querEncontro });
      }
    }

    if (params.body.autorizaConsulta) {
      if (params.body.autorizaConsulta !== '') {
        $and.push({ autorizaConsulta: params.body.autorizaConsulta });
      }
    }

    if (params.body.numRegistroExterno) {
      if (params.body.numRegistroExterno !== '') {
        $and.push({ numRegistroExterno: params.body.numRegistroExterno });
      }
    }

    if (params.body.unidadeSaudeOrigem) {
      if (params.body.unidadeSaudeOrigem !== '') {
        $and.push({ unidadeSaudeOrigem: params.body.unidadeSaudeOrigem });
      }
    }

    if (params.body.conscienciaPaciente) {
      if (params.body.conscienciaPaciente !== '') {
        $and.push({ conscienciaPaciente: params.body.conscienciaPaciente });
      }
    }

    if (params.body.transtornosPaciente) {
      if (params.body.transtornosPaciente !== '') {
        $and.push({ transtornosPaciente: params.body.transtornosPaciente });
      }
    }

    if (params.body.tratamentoPsicologico) {
      if (params.body.tratamentoPsicologico !== '') {
        $and.push({ tratamentoPsicologico: params.body.tratamentoPsicologico });
      }
    }

    if (params.body.sintoma_psiquico) {
      if (params.body.sintoma_psiquico !== '') {
        $and.push({ sintoma_psiquico: params.body.sintoma_psiquico });
      }
    }

    if (params.body.descricaoEstadoPaciente) {
      if (params.body.descricaoEstadoPaciente !== '') {
        $and.push({
          descricaoEstadoPaciente: params.body.descricaoEstadoPaciente,
        });
      }
    }

    if (params.body.dataIdentificacao) {
      if (params.body.dataIdentificacao !== '') {
        $and.push({ dataIdentificacao: params.body.dataIdentificacao });
      }
    }

    if (params.body.meioIdentificacao) {
      if (params.body.meioIdentificacao !== '') {
        $and.push({ meioIdentificacao: params.body.meioIdentificacao });
      }
    }

    if (params.body.tipoCaracteristicas) {
      if (params.body.tipoCaracteristicas.length > 0) {
        params.body.tipoCaracteristicas.forEach(element => {
          $and.push({
            tipoCaracteristicas: new mongoose.Types.ObjectId(element),
          });
        });
      }
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'dataEntrada horaEntrada dataSaida horaSaida formaSaida modoSaida numProntuario entradaAtraves statusRegistro statusPaciente nomePaciente nomeMae dataNascimento rg cpf cns nacionalidade pais estaturaAproximada pesoAproximado idadeAproximada condicoesEncontrada localEncontrado sinaisParticulares acessoriosUtilizados vestimentas barba bigode bairroEncontrado deficiencia naoInformaContato nomeContato grauParentescoSelected telefoneContato cpfContato genero generoOutro unidade nomeSocialPaciente apelidoPaciente vitimaAbandono querEncontro autorizaConsulta numRegistroExterno unidadeSaudeOrigem conscienciaPaciente transtornosPaciente tratamentoPsicologico descricaoEstadoPaciente tipoCaracteristicas dataIdentificacao meioIdentificacao observacao unidadeSaudeDestino imgPrincipalStr externalId',
      {
        skip: pageNumber * pageSizeNumber,
        limit: pageSizeNumber,
      },
    )
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      });

    const result = {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    return result;
  }

  async listSearchOut(params: any): Promise<any> {
    const page =
      params.query.currentPage != null ? `${params.query.currentPage}` : '1';
    const pageSize = params.query.perPage != null ? params.query.perPage : '10';
    const search = params.query.search != null ? params.query.search : '';
    let term = {};

    const $and = [];

    $and.push({
      autorizaConsulta: 'Sim',
    });

    if (params.body.idadeAproximada) {
      if (params.body.idadeAproximada !== '') {
        const min = Number(params.body.idadeAproximada) - 5;
        const max = Number(params.body.idadeAproximada) + 5;
        $and.push({
          idadeAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.tipoCaracteristicas) {
      if (params.body.tipoCaracteristicas.length > 0) {
        params.body.tipoCaracteristicas.forEach(element => {
          $and.push({
            tipoCaracteristicas: new mongoose.Types.ObjectId(element),
          });
        });
      }
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'idadeAproximada tipoCaracteristicas imgPrincipalStr externalId',
      {
        skip: pageNumber * pageSizeNumber,
        limit: pageSizeNumber,
      },
    )
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      })
      .sort('statusRegistro dataEntrada horaEntrada');

    const result = {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    return result;
  }

  arrayCompare(first, last) {
    let result = [];
    // const result = await first.filter(item => {
    result = first.filter(item => {
      return last.indexOf(String(item._id)) > -1;
    });

    return result.length;
  }

  async listById(id: string): Promise<any> {
    const paciente = await Paciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    })
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      });
    return paciente;
  }

  async listByExternalId(externalId: string): Promise<any> {
    console.log(externalId);
    const paciente = await Paciente.find({ externalId }, '_id');
    return paciente;
  }

  async uploadImage(id: string, filename: string): Promise<any> {
    return imagensPaciente.create({
      imagens: filename,
      paciente: id,
    });
  }

  async loadImage(id: string): Promise<any> {
    return imagensPaciente
      .find({
        paciente: new mongoose.Types.ObjectId(id),
      })
      .sort('dataEntrada');
  }

  async loadImageById(id: string): Promise<any> {
    return imagensPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async loadImageByIdOpen(id: string): Promise<any> {
    const img = await imagensPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });

    return img;
  }

  async deleteImage(id: string): Promise<void> {
    await imagensPaciente.findByIdAndDelete(id);
  }

  async delete(id: string): Promise<void> {
    await Paciente.findByIdAndDelete(id);
  }

  async uploadTermo(id: string, filename: string): Promise<any> {
    return termoPaciente.create({
      termo: filename,
      paciente: id,
    });
  }

  async loadTermo(id: string): Promise<any> {
    return termoPaciente.find({
      paciente: new mongoose.Types.ObjectId(id),
    });
  }

  async loadTermoById(id: string): Promise<any> {
    return termoPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async deleteTermo(id: string): Promise<void> {
    await termoPaciente.findByIdAndDelete(id);
  }

  async update(id: string, data: any): Promise<void> {
    return await Paciente.findByIdAndUpdate(id, data);
  }
}

export { PacienteRepository };
=======
import { Paciente } from 'model/Paciente.model';
import { termoPaciente } from 'model/TermosPaciente.model';
import moment from 'moment';
import mongoose from 'mongoose';

import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';
import { imagensPaciente } from '../model/ImagensPaciente.model';
import { IPacienteRepository } from './IPacienteRepository';

class PacienteRepository implements IPacienteRepository {
  // async create(data: ICreatePacienteDTO): Promise<any> {
  async create(data: any): Promise<any> {
    // data.dataEntrada = await moment(data.dataEntrada).format('YYYY-MM-DD');
    // data.horaEntrada = await moment(data.horaEntrada).format('HH:mm:ss');
    const cadastroPaciente = await Paciente.create(data);

    return cadastroPaciente;
  }

  async listsearch(params: any): Promise<any> {
    const page =
      params.query.currentPage != null ? `${params.query.currentPage}` : '1';
    const pageSize = params.query.perPage != null ? params.query.perPage : '10';
    const search = params.query.search != null ? params.query.search : '';
    let term = {};
    // Caso a uma palavra para busca seja enviada
    if (search) {
      term = {
        $or: [
          { nomePaciente: search },
          { cpf: search },
          { entradaAtraves: search },
          { numProntuario: search },
        ],
      };
    }

    const $and = [];

    if (params.body.dataEntrada) {
      if (params.body.dataEntrada !== '') {
        $and.push({ dataEntrada: params.body.dataEntrada });
      }
    }

    if (params.body.horaEntrada) {
      if (params.body.horaEntrada !== '') {
        $and.push({ horaEntrada: params.body.horaEntrada });
      }
    }

    if (params.body.numProntuario) {
      if (params.body.numProntuario !== '') {
        $and.push({ numProntuario: params.body.numProntuario });
      }
    }

    if (params.body.entradaAtraves) {
      if (params.body.entradaAtraves !== '') {
        $and.push({ entradaAtraves: params.body.entradaAtraves });
      }
    }

    if (params.body.statusRegistro) {
      if (params.body.statusRegistro !== '') {
        $and.push({ statusRegistro: params.body.statusRegistro });
      }
    }

    if (params.body.statusPaciente) {
      if (params.body.statusPaciente !== '') {
        $and.push({ statusPaciente: params.body.statusPaciente });
      }
    }

    if (params.body.nomePaciente) {
      if (params.body.nomePaciente !== '') {
        $and.push({ nomePaciente: params.body.nomePaciente });
      }
    }

    if (params.body.nomeMae) {
      if (params.body.nomeMae !== '') {
        $and.push({ nomeMae: params.body.nomeMae });
      }
    }

    if (params.body.dataNascimento) {
      if (params.body.dataNascimento !== '') {
        $and.push({ dataNascimento: params.body.dataNascimento });
      }
    }

    if (params.body.rg) {
      if (params.body.rg !== '') {
        $and.push({ rg: params.body.rg });
      }
    }

    if (params.body.cpf) {
      if (params.body.cpf !== '') {
        $and.push({ cpf: params.body.cpf });
      }
    }

    if (params.body.cns) {
      if (params.body.cns !== '') {
        $and.push({ cns: params.body.cns });
      }
    }

    if (params.body.nacionalidade) {
      if (params.body.nacionalidade !== '') {
        $and.push({ nacionalidade: params.body.nacionalidade });
      }
    }

    if (params.body.pais) {
      if (params.body.pais !== '') {
        $and.push({ pais: params.body.pais });
      }
    }

    if (params.body.estaturaAproximada) {
      if (params.body.estaturaAproximada !== '') {
        const min = Number(params.body.estaturaAproximada) - 0.3;
        const max = Number(params.body.estaturaAproximada) + 0.3;
        $and.push({
          estaturaAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.pesoAproximado) {
      if (params.body.pesoAproximado !== '') {
        const min = Number(params.body.pesoAproximado) - 5;
        const max = Number(params.body.pesoAproximado) + 5;
        $and.push({
          pesoAproximado: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.idadeAproximada) {
      if (params.body.idadeAproximada !== '') {
        const min = Number(params.body.idadeAproximada) - 5;
        const max = Number(params.body.idadeAproximada) + 5;
        $and.push({
          idadeAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.condicoesEncontrada) {
      if (params.body.condicoesEncontrada !== '') {
        $and.push({ condicoesEncontrada: params.body.condicoesEncontrada });
      }
    }

    if (params.body.localEncontrado) {
      if (params.body.localEncontrado !== '') {
        $and.push({ localEncontrado: params.body.localEncontrado });
      }
    }

    if (params.body.sinaisParticulares) {
      if (params.body.sinaisParticulares !== '') {
        $and.push({ sinaisParticulares: params.body.sinaisParticulares });
      }
    }

    if (params.body.acessoriosUtilizados) {
      if (params.body.acessoriosUtilizados !== '') {
        $and.push({ acessoriosUtilizados: params.body.acessoriosUtilizados });
      }
    }

    if (params.body.vestimentas) {
      if (params.body.vestimentas !== '') {
        $and.push({ vestimentas: params.body.vestimentas });
      }
    }

    if (params.body.barba) {
      if (params.body.barba !== '') {
        $and.push({ barba: params.body.barba });
      }
    }

    if (params.body.bigode) {
      if (params.body.bigode !== '') {
        $and.push({ bigode: params.body.bigode });
      }
    }

    if (params.body.bairroEncontrado) {
      if (params.body.bairroEncontrado !== '') {
        $and.push({ bairroEncontrado: params.body.bairroEncontrado });
      }
    }

    if (params.body.deficiencia) {
      if (params.body.deficiencia !== '') {
        $and.push({ deficiencia: params.body.deficiencia });
      }
    }

    if (params.body.naoInformaContato) {
      if (params.body.naoInformaContato !== '') {
        $and.push({ naoInformaContato: params.body.naoInformaContato });
      }
    }

    if (params.body.nomeContato) {
      if (params.body.nomeContato !== '') {
        $and.push({ nomeContato: params.body.nomeContato });
      }
    }

    if (params.body.grauParentescoSelected) {
      if (params.body.grauParentescoSelected !== '') {
        $and.push({
          grauParentescoSelected: params.body.grauParentescoSelected,
        });
      }
    }

    if (params.body.telefoneContato) {
      if (params.body.telefoneContato !== '') {
        $and.push({ telefoneContato: params.body.telefoneContato });
      }
    }

    if (params.body.cpfContato) {
      if (params.body.cpfContato !== '') {
        $and.push({ cpfContato: params.body.cpfContato });
      }
    }

    if (params.body.genero) {
      if (params.body.genero !== '') {
        $and.push({ genero: params.body.genero });
      }
    }

    if (params.body.generoOutro) {
      if (params.body.generoOutro !== '') {
        $and.push({ generoOutro: params.body.generoOutro });
      }
    }

    if (params.body.unidade) {
      if (params.body.unidade !== '') {
        $and.push({ unidade: params.body.unidade });
      }
    }

    if (params.body.nomeSocialPaciente) {
      if (params.body.nomeSocialPaciente !== '') {
        $and.push({ nomeSocialPaciente: params.body.nomeSocialPaciente });
      }
    }

    if (params.body.apelidoPaciente) {
      if (params.body.apelidoPaciente !== '') {
        $and.push({ apelidoPaciente: params.body.apelidoPaciente });
      }
    }

    if (params.body.vitimaAbandono) {
      if (params.body.vitimaAbandono !== '') {
        $and.push({ vitimaAbandono: params.body.vitimaAbandono });
      }
    }

    if (params.body.querEncontro) {
      if (params.body.querEncontro !== '') {
        $and.push({ querEncontro: params.body.querEncontro });
      }
    }

    if (params.body.autorizaConsulta) {
      if (params.body.autorizaConsulta !== '') {
        $and.push({ autorizaConsulta: params.body.autorizaConsulta });
      }
    }

    if (params.body.numRegistroExterno) {
      if (params.body.numRegistroExterno !== '') {
        $and.push({ numRegistroExterno: params.body.numRegistroExterno });
      }
    }

    if (params.body.unidadeSaudeOrigem) {
      if (params.body.unidadeSaudeOrigem !== '') {
        $and.push({ unidadeSaudeOrigem: params.body.unidadeSaudeOrigem });
      }
    }

    if (params.body.conscienciaPaciente) {
      if (params.body.conscienciaPaciente !== '') {
        $and.push({ conscienciaPaciente: params.body.conscienciaPaciente });
      }
    }

    if (params.body.transtornosPaciente) {
      if (params.body.transtornosPaciente !== '') {
        $and.push({ transtornosPaciente: params.body.transtornosPaciente });
      }
    }

    if (params.body.tratamentoPsicologico) {
      if (params.body.tratamentoPsicologico !== '') {
        $and.push({ tratamentoPsicologico: params.body.tratamentoPsicologico });
      }
    }

    if (params.body.sintoma_psiquico) {
      if (params.body.sintoma_psiquico !== '') {
        $and.push({ sintoma_psiquico: params.body.sintoma_psiquico });
      }
    }

    if (params.body.descricaoEstadoPaciente) {
      if (params.body.descricaoEstadoPaciente !== '') {
        $and.push({
          descricaoEstadoPaciente: params.body.descricaoEstadoPaciente,
        });
      }
    }

    if (params.body.dataIdentificacao) {
      if (params.body.dataIdentificacao !== '') {
        $and.push({ dataIdentificacao: params.body.dataIdentificacao });
      }
    }

    if (params.body.meioIdentificacao) {
      if (params.body.meioIdentificacao !== '') {
        $and.push({ meioIdentificacao: params.body.meioIdentificacao });
      }
    }

    if (params.body.tipoCaracteristicas) {
      if (params.body.tipoCaracteristicas.length > 0) {
        params.body.tipoCaracteristicas.forEach(element => {
          $and.push({
            tipoCaracteristicas: new mongoose.Types.ObjectId(element),
          });
        });
      }
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'dataEntrada horaEntrada dataSaida horaSaida formaSaida modoSaida numProntuario entradaAtraves statusRegistro statusPaciente nomePaciente nomeMae dataNascimento rg cpf cns nacionalidade pais estaturaAproximada pesoAproximado idadeAproximada condicoesEncontrada localEncontrado sinaisParticulares acessoriosUtilizados vestimentas barba bigode bairroEncontrado deficiencia naoInformaContato nomeContato grauParentescoSelected telefoneContato cpfContato genero generoOutro unidade nomeSocialPaciente apelidoPaciente vitimaAbandono querEncontro autorizaConsulta numRegistroExterno unidadeSaudeOrigem conscienciaPaciente transtornosPaciente tratamentoPsicologico descricaoEstadoPaciente tipoCaracteristicas dataIdentificacao meioIdentificacao observacao unidadeSaudeDestino imgPrincipalStr externalId',
      {
        skip: pageNumber * pageSizeNumber,
        limit: pageSizeNumber,
      },
    )
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      });

    const result = {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    return result;
  }

  async listSearchOut(params: any): Promise<any> {
    const page =
      params.query.currentPage != null ? `${params.query.currentPage}` : '1';
    const pageSize = params.query.perPage != null ? params.query.perPage : '10';
    const search = params.query.search != null ? params.query.search : '';
    let term = {};

    const $and = [];

    $and.push({
      autorizaConsulta: 'Sim',
    });

    if (params.body.idadeAproximada) {
      if (params.body.idadeAproximada !== '') {
        const min = Number(params.body.idadeAproximada) - 5;
        const max = Number(params.body.idadeAproximada) + 5;
        $and.push({
          idadeAproximada: { $gte: min, $lte: max },
        });
      }
    }

    if (params.body.tipoCaracteristicas) {
      if (params.body.tipoCaracteristicas.length > 0) {
        params.body.tipoCaracteristicas.forEach(element => {
          $and.push({
            tipoCaracteristicas: new mongoose.Types.ObjectId(element),
          });
        });
      }
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'idadeAproximada tipoCaracteristicas imgPrincipalStr externalId',
      {
        skip: pageNumber * pageSizeNumber,
        limit: pageSizeNumber,
      },
    )
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      });

    const result = {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    return result;
  }

  arrayCompare(first, last) {
    let result = [];
    // const result = await first.filter(item => {
    result = first.filter(item => {
      return last.indexOf(String(item._id)) > -1;
    });

    return result.length;
  }

  async listById(id: string): Promise<any> {
    const paciente = await Paciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    })
      .populate({
        path: 'tipoCaracteristicas',
        populate: {
          path: 'caracteristica',
          model: 'Caracteristica',
          select: 'name',
        },
      })
      .populate({
        path: 'imgPrincipal',
        select: 'imagens',
      });
    return paciente;
  }

  async listByExternalId(externalId: string): Promise<any> {
    console.log(externalId);
    const paciente = await Paciente.find({ externalId }, '_id');
    return paciente;
  }

  async uploadImage(id: string, filename: string): Promise<any> {
    return imagensPaciente.create({
      imagens: filename,
      paciente: id,
    });
  }

  async loadImage(id: string): Promise<any> {
    return imagensPaciente
      .find({
        paciente: new mongoose.Types.ObjectId(id),
      })
      .sort('dataEntrada');
  }

  async loadImageById(id: string): Promise<any> {
    return imagensPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async loadImageByIdOpen(id: string): Promise<any> {
    const img = await imagensPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });

    return img;
  }

  async deleteImage(id: string): Promise<void> {
    await imagensPaciente.findByIdAndDelete(id);
  }

  async delete(id: string): Promise<void> {
    await Paciente.findByIdAndDelete(id);
  }

  async uploadTermo(id: string, filename: string): Promise<any> {
    return termoPaciente.create({
      termo: filename,
      paciente: id,
    });
  }

  async loadTermo(id: string): Promise<any> {
    return termoPaciente.find({
      paciente: new mongoose.Types.ObjectId(id),
    });
  }

  async loadTermoById(id: string): Promise<any> {
    return termoPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async deleteTermo(id: string): Promise<void> {
    await termoPaciente.findByIdAndDelete(id);
  }

  async update(id: string, data: any): Promise<void> {
    return await Paciente.findByIdAndUpdate(id, data);
  }
}

export { PacienteRepository };
