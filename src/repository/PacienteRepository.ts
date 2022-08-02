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

  async list(params: any): Promise<any> {
    const page = params.currentPage != null ? `${params.currentPage}` : '1';
    const pageSize = params.perPage != null ? params.perPage : '10';
    const search = params.search != null ? params.search : '';
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

    if (params.dataEntrada) {
      $and.push({
        dataEntrada: new Date(moment(params.dataEntrada).format('YYYY-MM-DD')),
      });
    }

    if (params.numProntuario) {
      $and.push({ numProntuario: params.numProntuario });
    }

    if (params.entradaAtraves) {
      $and.push({ entradaAtraves: params.entradaAtraves });
    }

    if (params.statusRegistro) {
      $and.push({ statusRegistro: params.statusRegistro });
    }

    if (params.statusPaciente) {
      $and.push({ statusPaciente: params.statusPaciente });
    }

    if (params.nomePaciente) {
      $and.push({ nomePaciente: params.nomePaciente });
    }

    if (params.nomeMae) {
      $and.push({ nomeMae: params.nomeMae });
    }

    if (params.dataNascimento) {
      $and.push({ dataNascimento: params.dataNascimento });
    }

    if (params.rg) {
      $and.push({ rg: params.rg });
    }

    if (params.cpf) {
      $and.push({ cpf: params.cpf });
    }

    if (params.cns) {
      $and.push({ cns: params.cns });
    }

    if (params.nacionalidade) {
      $and.push({ nacionalidade: params.nacionalidade });
    }

    if (params.pais) {
      $and.push({ pais: params.pais });
    }

    if (params.estaturaAproximada) {
      // $and.push({ estaturaAproximada: params.estaturaAproximada });
      $and.push({
        estaturaAproximada: {
          $gt: params.estaturaAproximada - 0.3,
          $lt: params.estaturaAproximada + 0.3,
        },
      });
    }

    if (params.pesoAproximado) {
      // $and.push({ pesoAproximado: params.pesoAproximado });
      $and.push({
        pesoAproximado: {
          $gt: params.pesoAproximado - 5,
          $lt: params.pesoAproximado + 5,
        },
      });
    }

    if (params.idadeAproximada) {
      // $and.push({ idadeAproximada: params.idadeAproximada });
      $and.push({
        idadeAproximada: {
          $gt: params.idadeAproximada - 5,
          $lt: params.idadeAproximada + 5,
        },
      });
    }

    if (params.condicoesEncontrada) {
      $and.push({ condicoesEncontrada: params.condicoesEncontrada });
    }

    if (params.localEncontrado) {
      $and.push({ localEncontrado: params.localEncontrado });
    }

    if (params.sinaisParticulares) {
      $and.push({ sinaisParticulares: params.sinaisParticulares });
    }

    if (params.acessoriosUtilizados) {
      $and.push({ acessoriosUtilizados: params.acessoriosUtilizados });
    }

    if (params.vestimentas) {
      $and.push({ vestimentas: params.vestimentas });
    }

    if (params.barba) {
      $and.push({ barba: params.barba });
    }

    if (params.bigode) {
      $and.push({ bigode: params.bigode });
    }

    if (params.bairroEncontrado) {
      $and.push({ bairroEncontrado: params.bairroEncontrado });
    }

    if (params.deficiencia) {
      $and.push({ deficiencia: params.deficiencia });
    }

    if (params.naoInformaContato) {
      $and.push({ naoInformaContato: params.naoInformaContato });
    }

    if (params.nomeContato) {
      $and.push({ nomeContato: params.nomeContato });
    }

    if (params.grauParentescoSelected) {
      $and.push({ grauParentescoSelected: params.grauParentescoSelected });
    }

    if (params.telefoneContato) {
      $and.push({ telefoneContato: params.telefoneContato });
    }

    if (params.cpfContato) {
      $and.push({ cpfContato: params.cpfContato });
    }

    if (params.genero) {
      $and.push({ genero: params.genero });
    }

    if (params.generoOutro) {
      $and.push({ generoOutro: params.generoOutro });
    }

    if (params.unidade) {
      $and.push({ unidade: params.unidade });
    }

    if (params.nomeSocialPaciente) {
      $and.push({ nomeSocialPaciente: params.nomeSocialPaciente });
    }

    if (params.apelidoPaciente) {
      $and.push({ apelidoPaciente: params.apelidoPaciente });
    }

    if (params.vitimaAbandono) {
      $and.push({ vitimaAbandono: params.vitimaAbandono });
    }

    if (params.querEncontro) {
      $and.push({ querEncontro: params.querEncontro });
    }

    if (params.autorizaConsulta) {
      $and.push({ autorizaConsulta: params.autorizaConsulta });
    }

    if (params.numRegistroExterno) {
      $and.push({ numRegistroExterno: params.numRegistroExterno });
    }

    if (params.unidadeSaudeOrigem) {
      $and.push({ unidadeSaudeOrigem: params.unidadeSaudeOrigem });
    }

    if (params.conscienciaPaciente) {
      $and.push({ conscienciaPaciente: params.conscienciaPaciente });
    }

    if (params.transtornosPaciente) {
      $and.push({ transtornosPaciente: params.transtornosPaciente });
    }

    if (params.tratamentoPsicologico) {
      $and.push({ tratamentoPsicologico: params.tratamentoPsicologico });
    }

    if (params.sintoma_psiquico) {
      $and.push({ sintoma_psiquico: params.sintoma_psiquico });
    }

    if (params.descricaoEstadoPaciente) {
      $and.push({ descricaoEstadoPaciente: params.descricaoEstadoPaciente });
    }

    if (params.dataIdentificacao) {
      $and.push({ genero: params.genero });
    }

    if (params.meioIdentificacao) {
      $and.push({ genero: params.genero });
    }

    if (params.tipoCaracteristicas) {
      params.tipoCaracteristicas.forEach(element => {
        $and.push({ tipoCaracteristicas: element });
      });
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = parseInt(pageSize, 10);

    // const data = await Paciente.find(
    //   term,
    //   {
    //     numProntuario: 1,
    //     estaturaAproximada: '$estaturaAproximada',
    //   },
    //   { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber },
    // ).populate({
    //   path: 'tipoCaracteristicas',
    //   populate: {
    //     path: 'caracteristica',
    //     model: 'Caracteristica',
    //     select: 'name',
    //   },
    // });

    const parcial = await Paciente.aggregate([
      {
        $project: {
          dataEntrada: 1,
          horaEntrada: 1,
          numProntuario: 1,
          entradaAtraves: 1,
          statusRegistro: 1,
          statusPaciente: 1,
          nomePaciente: 1,
          nomeMae: 1,
          dataNascimento: 1,
          rg: 1,
          cpf: 1,
          cns: 1,
          nacionalidade: 1,
          pais: 1,
          estaturaAproximada: {
            $convert: { input: '$estaturaAproximada', to: 'string' },
          },
          pesoAproximado: {
            $convert: { input: '$pesoAproximado', to: 'string' },
          },
          idadeAproximada: {
            $convert: { input: '$idadeAproximada', to: 'string' },
          },
          condicoesEncontrada: 1,
          localEncontrado: 1,
          sinaisParticulares: 1,
          acessoriosUtilizados: 1,
          vestimentas: 1,
          barba: 1,
          bigode: 1,
          bairroEncontrado: 1,
          deficiencia: 1,
          naoInformaContato: 1,
          nomeContato: 1,
          grauParentescoSelected: 1,
          telefoneContato: 1,
          cpfContato: 1,
          genero: 1,
          generoOutro: 1,
          unidade: 1,
          nomeSocialPaciente: 1,
          apelidoPaciente: 1,
          vitimaAbandono: 1,
          querEncontro: 1,
          autorizaConsulta: 1,
          numRegistroExterno: 1,
          unidadeSaudeOrigem: 1,
          conscienciaPaciente: 1,
          transtornosPaciente: 1,
          tratamentoPsicologico: 1,
          descricaoEstadoPaciente: 1,
          dataIdentificacao: 1,
          meioIdentificacao: 1,
          tipoCaracteristicas: 1,
        },
      },
    ])
      .match(term)
      .skip(pageNumber * pageSizeNumber)
      .limit(pageSizeNumber);

    const data = await Paciente.populate(parcial, {
      path: 'tipoCaracteristicas',
      populate: {
        path: 'caracteristica',
        model: 'Caracteristica',
        select: 'name',
      },
    });

    // const dataFilter = [];
    // if (params.tipos_caracteristicas) {
    //   dataFilter = data.filter(elemento => {
    //     if (
    //       elemento.tipos_caracteristicas.length &&
    //       this.arrayCompare(
    //         elemento.tipos_caracteristicas,
    //         params.tipos_caracteristicas,
    //       ) === params.tipos_caracteristicas.length
    //     ) {
    //       return true;
    //     }
    //     return false;
    //   });
    // }

    // const dados = dataFilter.length ? dataFilter : data;
    const result = {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    return result;
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
      'dataEntrada horaEntrada dataSaida horaSaida formaSaida modoSaida numProntuario entradaAtraves statusRegistro statusPaciente nomePaciente nomeMae dataNascimento rg cpf cns nacionalidade pais estaturaAproximada pesoAproximado idadeAproximada condicoesEncontrada localEncontrado sinaisParticulares acessoriosUtilizados vestimentas barba bigode bairroEncontrado deficiencia naoInformaContato nomeContato grauParentescoSelected telefoneContato cpfContato genero generoOutro unidade nomeSocialPaciente apelidoPaciente vitimaAbandono querEncontro autorizaConsulta numRegistroExterno unidadeSaudeOrigem conscienciaPaciente transtornosPaciente tratamentoPsicologico descricaoEstadoPaciente tipoCaracteristicas dataIdentificacao meioIdentificacao observacao unidadeSaudeDestino imgPrincipalStr',
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

  async uploadImage(id: string, filename: string): Promise<any> {
    return imagensPaciente.create({
      imagens: filename,
      paciente: id,
    });
  }

  async loadImage(id: string): Promise<any> {
    return imagensPaciente.find({
      paciente: new mongoose.Types.ObjectId(id),
    });
  }

  async loadImageById(id: string): Promise<any> {
    return imagensPaciente.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
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
