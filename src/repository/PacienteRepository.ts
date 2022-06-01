import { imagensPaciente } from 'model/ImagensPaciente.model';
import { Paciente } from 'model/paciente.model';

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

  async list(): Promise<any[]> {
    const data = await Paciente.find().populate('tipos_caracteristicas');
    return data;
  }

  // async load(): Promise<any[]> {
  //   const data = await Paciente.aggregate([
  //     { $project: { __v: 0 } },
  //     {
  //       $lookup: {
  //         from: 'caracteristicas',
  //         localField: 'caracteristicas',
  //         foreignField: '_id',
  //         pipeline: [
  //           { $project: { __v: 0, _id: 0 } },
  //           {
  //             $lookup: {
  //               from: 'corcabelos',
  //               localField: 'cor_cabelos',
  //               foreignField: '_id',
  //               pipeline: [{ $project: { __v: 0, _id: 0 } }],
  //               as: 'cor_cabelo',
  //             },
  //           },
  //         ],
  //         as: 'caracteristicas',
  //       },
  //     },
  //   ]);
  //   return data;
  // }

  // async loadPaciente(nome_paciente: string): Promise<any> {
  //   const resultset = await Paciente.aggregate([
  //     { $match: { nome_paciente } },
  //     { $project: { __v: 0 } },
  //     {
  //       $lookup: {
  //         from: 'caracteristicas',
  //         localField: 'caracteristicas',
  //         foreignField: '_id',
  //         pipeline: [
  //           { $project: { __v: 0, _id: 0 } },
  //           {
  //             $lookup: {
  //               from: 'corcabelos',
  //               localField: 'cor_cabelos',
  //               foreignField: '_id',
  //               pipeline: [{ $project: { __v: 0, _id: 0 } }],
  //               as: 'cor_cabelo',
  //             },
  //           },
  //         ],
  //         as: 'caracteristicas',
  //       },
  //     },
  //   ]);

  //   return resultset;
  // }

  async listById(id: string): Promise<any> {
    const paciente = await Paciente.findById(id).populate(
      'tipos_caracteristicas',
    );
    return paciente;
  }

  // async loadById(id: string): Promise<any> {
  //   const resultset = await Paciente.aggregate([
  //     { $match: { _id: id } },
  //     { $project: { __v: 0 } },
  //     {
  //       $lookup: {
  //         from: 'caracteristicas',
  //         localField: 'caracteristicas',
  //         foreignField: '_id',
  //         pipeline: [
  //           { $project: { __v: 0, _id: 0 } },
  //           {
  //             $lookup: {
  //               from: 'corcabelos',
  //               localField: 'cor_cabelos',
  //               foreignField: '_id',
  //               pipeline: [{ $project: { __v: 0, _id: 0 } }],
  //               as: 'cor_cabelo',
  //             },
  //           },
  //         ],
  //         as: 'caracteristicas',
  //       },
  //     },
  //   ]);
  //   return resultset;
  // }

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
