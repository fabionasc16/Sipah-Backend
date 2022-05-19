import { ICreateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/pacientes/ICreateCadastroPacienteDTO';
import { IUpdateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/pacientes/IUpdateCadastroPacienteDTO';
import { imagensPaciente } from '@modules/cadastroPaciente/models/ImagensPaciente.model';
import { paciente } from '@modules/cadastroPaciente/models/Paciente.model';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';

class CadastroPacienteRepository implements ICadastroPacienteRepository {
  async create(data: ICreateCadastroPacienteDTO): Promise<any> {
    const cadastroPaciente = await paciente.create({
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
      caracteristicas: data.caracteristicas,
    });

    return cadastroPaciente;
  }

  async load(): Promise<any[]> {
    const data = await paciente.aggregate([
      { $project: { __v: 0 } },
      {
        $lookup: {
          from: 'caracteristicas',
          localField: 'caracteristicas',
          foreignField: '_id',
          pipeline: [
            { $project: { __v: 0, _id: 0 } },
            {
              $lookup: {
                from: 'corcabelos',
                localField: 'cor_cabelos',
                foreignField: '_id',
                pipeline: [{ $project: { __v: 0, _id: 0 } }],
                as: 'cor_cabelo',
              },
            },
          ],
          as: 'caracteristicas',
        },
      },
    ]);
    return data;
  }

  async loadPaciente(nome_paciente: string): Promise<any> {
    const resultset = await paciente.aggregate([
      { $match: { nome_paciente } },
      { $project: { __v: 0 } },
      {
        $lookup: {
          from: 'caracteristicas',
          localField: 'caracteristicas',
          foreignField: '_id',
          pipeline: [
            { $project: { __v: 0, _id: 0 } },
            {
              $lookup: {
                from: 'corcabelos',
                localField: 'cor_cabelos',
                foreignField: '_id',
                pipeline: [{ $project: { __v: 0, _id: 0 } }],
                as: 'cor_cabelo',
              },
            },
          ],
          as: 'caracteristicas',
        },
      },
    ]);

    return resultset;
  }

  async loadById(id: string): Promise<any> {
    const resultset = await paciente.aggregate([
      { $match: { _id: id } },
      { $project: { __v: 0 } },
      {
        $lookup: {
          from: 'caracteristicas',
          localField: 'caracteristicas',
          foreignField: '_id',
          pipeline: [
            { $project: { __v: 0, _id: 0 } },
            {
              $lookup: {
                from: 'corcabelos',
                localField: 'cor_cabelos',
                foreignField: '_id',
                pipeline: [{ $project: { __v: 0, _id: 0 } }],
                as: 'cor_cabelo',
              },
            },
          ],
          as: 'caracteristicas',
        },
      },
    ]);
    return resultset;
  }

  async update(data: IUpdateCadastroPacienteDTO): Promise<void> {
    await paciente.findByIdAndUpdate(
      { _id: data.id },
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
    await paciente.findByIdAndDelete(id);
  }
}

export { CadastroPacienteRepository };
