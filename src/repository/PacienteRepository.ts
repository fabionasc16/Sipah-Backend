import { imagensPaciente } from 'model/ImagensPaciente.model';
import { Paciente } from 'model/Paciente.model';
import mongoose, { Mongoose } from 'mongoose';
import { json } from 'stream/consumers';

import { ICreatePacienteDTO } from '../dto/ICreatePacienteDTO';
import { IUpdatePacienteDTO } from '../dto/IUpdatePacienteDTO';
import { IPacienteRepository } from './IPacienteRepository';

class PacienteRepository implements IPacienteRepository {
  async create(data: ICreatePacienteDTO): Promise<any> {
    const cadastroPaciente = await Paciente.create({
      hora_entrada: data.hora_entrada,
      tipo_entrada: data.tipo_entrada,
      nome_paciente: data.nome_paciente,
      nome_mae: data.nome_mae,
      data_nascimento: data.data_nascimento,
      rg_paciente: data.rg_paciente,
      cpf_paciente: data.cpf_paciente,
      cns_paciente: data.cns_paciente,
      nacionalidade: data.nacionalidade,
      sexo: data.sexo,
      estatura_aproximada: data.estatura_aproximada,
      peso_aproximado: data.peso_aproximado,
      idade_aproximada: data.idade_aproximada,
      condicoes_encontrado: data.condicoes_encontrado,
      local_encontrado: data.local_encontrado,
      sinais_particulares: data.sinais_particulares,
      acessorios_utilizados: data.acessorios_utilizados,
      vestimentas: data.vestimentas,
      tem_barba: data.tem_barba,
      tem_bigode: data.tem_bigode,
      bairro: data.bairro,
      deficiencias: data.deficiencias,
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

    if (params.hora_entrada) {
      $and.push({ hora_entrada: params.hora_entrada });
    }

    if (params.tipo_entrada) {
      $and.push({ tipo_entrada: params.tipo_entrada });
    }

    if (params.nome_paciente) {
      $and.push({ nome_paciente: params.nome_paciente });
    }

    if (params.nome_mae) {
      $and.push({ nome_mae: params.nome_mae });
    }

    if (params.data_nascimento) {
      $and.push({ data_nascimento: params.data_nascimento });
    }

    if (params.rg_paciente) {
      $and.push({ rg_paciente: params.rg_paciente });
    }

    if (params.cpf_paciente) {
      $and.push({ cpf_paciente: params.cpf_paciente });
    }

    if (params.cns_paciente) {
      $and.push({ cns_paciente: params.cns_paciente });
    }

    if (params.nacionalidade) {
      $and.push({ nacionalidade: params.nacionalidade });
    }

    if (params.sexo) {
      $and.push({ sexo: params.sexo });
    }

    if (params.estatura_aproximada) {
      $and.push({ estatura_aproximada: params.estatura_aproximada });
    }

    if (params.peso_aproximado) {
      $and.push({ peso_aproximado: params.peso_aproximado });
    }

    if (params.idade_aproximada) {
      $and.push({ idade_aproximada: params.idade_aproximada });
    }

    if (params.condicoes_encontrado) {
      $and.push({ condicoes_encontrado: params.condicoes_encontrado });
    }

    if (params.local_encontrado) {
      $and.push({ local_encontrado: params.local_encontrado });
    }

    if (params.sinais_particulares) {
      $and.push({ sinais_particulares: params.sinais_particulares });
    }

    if (params.acessorios_utilizados) {
      $and.push({ acessorios_utilizados: params.acessorios_utilizados });
    }

    if (params.vestimentas) {
      $and.push({ vestimentas: params.vestimentas });
    }

    if (params.tem_barba) {
      $and.push({ tem_barba: params.tem_barba });
    }

    if (params.tem_bigode) {
      $and.push({ tem_bigode: params.tem_bigode });
    }

    if (params.bairro) {
      $and.push({ bairro: params.bairro });
    }

    if (params.deficiencias) {
      $and.push({ deficiencias: params.deficiencias });
    }

    if (params.tipos_caracteristicas) {
      console.log('in');
      params.tipos_caracteristicas.forEach(element => {
        $and.push({ tipos_caracteristicas: element });
      });
    }

    if ($and.length) {
      Object.assign(term, { $and });
    }

    console.log('termo');
    console.log(term);
    // console.log($and);
    const total = await Paciente.countDocuments(term);
    const pageNumber = parseInt(page, 10);
    const pageSizeNumber = parseInt(pageSize, 10);

    const data = await Paciente.find(
      term,
      'nome_paciente cpf_paciente tipo_entrada rg_paciente',
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
      'tipos_caracteristicas',
    );
    return paciente;
  }

  async update(id: string, data: IUpdatePacienteDTO): Promise<void> {
    await Paciente.findByIdAndUpdate(
      { _id: id },
      {
        hora_entrada: data.hora_entrada,
        tipo_entrada: data.tipo_entrada,
        nome_paciente: data.nome_paciente,
        nome_mae: data.nome_mae,
        data_nascimento: data.data_nascimento,
        rg_paciente: data.rg_paciente,
        cpf_paciente: data.cpf_paciente,
        cns_paciente: data.cns_paciente,
        nacionalidade: data.nacionalidade,
        sexo: data.sexo,
        estatura_aproximada: data.estatura_aproximada,
        peso_aproximado: data.peso_aproximado,
        idade_aproximada: data.idade_aproximada,
        condicoes_encontrado: data.condicoes_encontrado,
        local_encontrado: data.local_encontrado,
        sinais_particulares: data.sinais_particulares,
        acessorios_utilizados: data.acessorios_utilizados,
        vestimentas: data.vestimentas,
        tem_barba: data.tem_barba,
        tem_bigode: data.tem_bigode,
        bairro: data.bairro,
        deficiencias: data.deficiencias,
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
