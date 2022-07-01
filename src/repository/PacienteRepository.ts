import { Paciente } from 'model/Paciente.model';
import mongoose from 'mongoose';

import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';
import { imagensPaciente } from '../model/ImagensPaciente.model';
import { IPacienteRepository } from './IPacienteRepository';

class PacienteRepository implements IPacienteRepository {
  async create(data: ICreatePacienteDTO): Promise<any> {
    const cadastroPaciente = await Paciente.create({
      dataEntrada: data.dataEntrada,
      horaEntrada: data.horaEntrada,
      numProntuario: data.numProntuario,
      entradaAtraves: data.entradaAtraves,
      statusRegistro: data.statusRegistro,
      statusPaciente: data.statusPaciente ? data.statusPaciente : '',
      nomePaciente: data.nomePaciente ? data.nomePaciente : '',
      nomeMae: data.nomeMae ? data.nomeMae : '',
      dataNascimento: data.dataNascimento ? data.dataNascimento : '',
      rg: data.rg ? data.rg : '',
      cpf: data.cpf ? data.cpf : '',
      cns: data.cns ? data.cns : '',
      nacionalidade: data.nacionalidade ? data.nacionalidade : '',
      pais: data.pais ? data.cpf : '',
      estaturaAproximada: data.estaturaAproximada
        ? parseFloat(data.estaturaAproximada)
        : null,
      pesoAproximado: data.pesoAproximado
        ? parseFloat(data.pesoAproximado)
        : null,
      idadeAproximada: data.idadeAproximada
        ? parseInt(data.idadeAproximada, 10)
        : null,
      condicoesEncontrada: data.condicoesEncontrada
        ? data.condicoesEncontrada
        : '',
      localEncontrado: data.localEncontrado ? data.localEncontrado : '',
      sinaisParticulares: data.sinaisParticulares
        ? data.sinaisParticulares
        : '',
      acessoriosUtilizados: data.acessoriosUtilizados
        ? data.acessoriosUtilizados
        : '',
      vestimentas: data.vestimentas ? data.vestimentas : '',
      barba: data.barba ? data.barba : '',
      bigode: data.bigode ? data.bigode : '',
      bairroEncontrado: data.bairroEncontrado ? data.bairroEncontrado : '',
      deficiencia: data.deficiencia ? data.deficiencia : '',
      naoInformaContato:
        data.naoInformaContato !== null ? data.naoInformaContato : null,
      nomeContato: data.nomeContato ? data.nomeContato : '',
      grauParentescoSelected: data.grauParentescoSelected
        ? data.grauParentescoSelected
        : '',
      telefoneContato: data.telefoneContato ? data.telefoneContato : '',
      cpfContato: data.cpfContato ? data.cpfContato : '',
      genero: data.genero ? data.genero : '',
      generoOutro: data.generoOutro ? data.generoOutro : '',
      unidade: data.unidade ? data.unidade : '',
      nomeSocialPaciente: data.nomeSocialPaciente
        ? data.nomeSocialPaciente
        : '',
      apelidoPaciente: data.apelidoPaciente ? data.apelidoPaciente : '',
      vitimaAbandono: data.vitimaAbandono ? data.vitimaAbandono : '',
      querEncontro: data.querEncontro ? data.querEncontro : '',
      autorizaConsulta: data.autorizaConsulta ? data.autorizaConsulta : '',
      numRegistroExterno: data.numRegistroExterno
        ? data.numRegistroExterno
        : '',
      unidadeSaudeOrigem: data.unidadeSaudeOrigem
        ? data.unidadeSaudeOrigem
        : '',
      conscienciaPaciente: data.conscienciaPaciente
        ? data.conscienciaPaciente
        : '',
      transtornosPaciente: data.transtornosPaciente
        ? data.transtornosPaciente
        : '',
      tratamentoPsicologico: data.tratamentoPsicologico
        ? data.tratamentoPsicologico
        : '',
      descricaoEstadoPaciente: data.descricaoEstadoPaciente
        ? data.descricaoEstadoPaciente
        : '',
    });

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
      $and.push({ dataEntrada: params.dataEntrada });
    }

    if (params.horaEntrada) {
      $and.push({ horaEntrada: params.horaEntrada });
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

  arrayCompare(first, last) {
    let result = [];
    // const result = await first.filter(item => {
    result = first.filter(item => {
      return last.indexOf(String(item._id)) > -1;
    });

    return result.length;
  }

  async listById(id: string): Promise<any> {
    // const paciente = await Paciente.findById(id).populate({
    //   path: 'tipoCaracteristicas',
    //   populate: {
    //     path: 'caracteristica',
    //     model: 'Caracteristica',
    //     select: 'name',
    //   },
    // });
    // return paciente;
    const paciente = await Paciente.aggregate([
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
          tipoCaracteristicas: 1,
        },
      },
    ]).match({ _id: new mongoose.Types.ObjectId(id) });

    const data = await Paciente.populate(paciente, {
      path: 'tipoCaracteristicas',
      populate: {
        path: 'caracteristica',
        model: 'Caracteristica',
        select: 'name',
      },
    });

    return data[0];
  }

  async update(id: string, data: IUpdatePacienteDTO): Promise<void> {
    await Paciente.findByIdAndUpdate(
      { _id: id },
      {
        dataEntrada: data.dataEntrada,
        horaEntrada: data.horaEntrada,
        numProntuario: data.numProntuario,
        entradaAtraves: data.entradaAtraves,
        statusRegistro: data.statusRegistro,
        statusPaciente: data.statusPaciente,
        nomePaciente: data.nomePaciente,
        nomeMae: data.nomeMae,
        dataNascimento: data.dataNascimento,
        rg: data.rg,
        cpf: data.cpf,
        cns: data.cns,
        nacionalidade: data.nacionalidade,
        pais: data.pais,
        estaturaAproximada: parseFloat(data.estaturaAproximada),
        pesoAproximado: parseFloat(data.pesoAproximado),
        idadeAproximada: parseInt(data.idadeAproximada, 10),
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
        tipoCaracteristicas: data.tipoCaracteristicas,
      },
    );
  }

  async uploadImage(id: string, filename: string): Promise<any> {
    const userImage = await imagensPaciente.create({
      imagens: filename,
      paciente: id,
    });

    return userImage;
  }

  async loadImage(id: string): Promise<any> {
    const userImage = await imagensPaciente.find({
      paciente: new mongoose.Types.ObjectId(id),
    });

    return userImage;
  }

  async delete(id: string): Promise<void> {
    await Paciente.findByIdAndDelete(id);
  }
}

export { PacienteRepository };
