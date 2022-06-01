import { imagensPaciente } from 'model/ImagensPaciente.model';
import { Paciente } from 'model/Paciente.model';

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
    let page = (params.page != null ? (params.page - 1) + '' : '0');
    let pageSize = params.pageSize != null ? params.pageSize : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};
    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $or: [{ nome: search }, { cpf: search }, { setorUsuario: search }] };
    }

    let total = await Paciente.countDocuments(filters);
    let pageNumber = await parseInt(page);
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Paciente.find(
      filters,
      'nome cpf perfilUsuario setorUsuario',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber }).populate('tipos_caracteristicas');

    let result =  await { 'page': page, 'pageSize': pageSize, 'total': total, 'data': data };

    return result;

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

  async listByCPF(cpf: string): Promise<any[]> {
    const data = await Paciente.findOne({
      cpf,
    });
    return data;
  }


}

export { PacienteRepository };
