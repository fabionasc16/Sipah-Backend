import { Paciente } from 'model/Paciente.model';

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
      naoInfomaContato: data.naoInfomaContato,
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

    return cadastroPaciente;
  }

  async list(params: any): Promise<any> {
    const page = params.page != null ? `${params.page - 1}` : '0';
    const pageSize = params.pageSize != null ? params.pageSize : '10';
    const search = params.search != null ? params.search : '';
    let term = {};
    // Caso a uma palavra para busca seja enviada
    if (search) {
      term = {
        $or: [
          { nome_paciente: search },
          { cpf_paciente: search },
          { tipo_entrada: search },
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
      $and.push({ estaturaAproximada: params.estaturaAproximada });
    }

    if (params.pesoAproximado) {
      $and.push({ pesoAproximado: params.pesoAproximado });
    }

    if (params.idadeAproximada) {
      $and.push({ idadeAproximada: params.idadeAproximada });
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

    if (params.naoInfomaContato) {
      $and.push({ naoInfomaContato: params.naoInfomaContato });
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
    const pageNumber = parseInt(page, 10);
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'nomePaciente cpf entradaAtraves rg',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber },
    ).populate({
      path: 'tipos_caracteristicas',
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
    const result = await {
      page,
      pageSize,
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
    const paciente = await Paciente.findById(id).populate(
      'tipoCaracteristicas',
    );
    return paciente;
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
        naoInfomaContato: data.naoInfomaContato,
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

  async delete(id: string): Promise<void> {
    await Paciente.findByIdAndDelete(id);
  }
}

export { PacienteRepository };
