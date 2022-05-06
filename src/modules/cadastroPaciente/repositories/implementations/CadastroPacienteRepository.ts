import { ICreateCadastroPacienteDTO } from '@modules/cadastroPaciente/dtos/ICreateCadastroPacienteDTO';
import { paciente } from '@modules/cadastroPaciente/models/Paciente';
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
    const data = await paciente.find().populate('caracteristicas');
    return data;
  }

  async loadPaciente(nome_paciente: string): Promise<any> {
    const resultset = await paciente.findOne({
      where: {
        nome_paciente,
      },
    });

    return resultset;
  }
}

export { CadastroPacienteRepository };
