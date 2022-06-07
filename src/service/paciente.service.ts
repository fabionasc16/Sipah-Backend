import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
import { injectable, inject } from 'tsyringe';

import { IPacienteRepository } from '../repository/IPacienteRepository';

interface IRequest {
  hora_entrada: string;
  tipo_entrada: string;
  nome_paciente: string;
  nome_mae: string;
  data_nascimento: string;
  rg_paciente: string;
  cpf_paciente: string;
  cns_paciente: string;
  nacionalidade: string;
  sexo: string;
  estatura_aproximada: number;
  peso_aproximado: number;
  idade_aproximada: number;
  tem_barba: number;
  tem_bigode: number;
  sinais_particulares: string;
  acessorios_utilizados: string;
  deficiencias: string;
  vestimentas: string;
  local_encontrado: string;
  bairro: string;
  condicoes_encontrado: string;
  tipos_caracteristicas: any;
}

@injectable()
class PacienteService {
  constructor(
    @inject('PacienteRepository')
    private pacienteRepository: IPacienteRepository,
  ) {}

  async create(data: IRequest): Promise<any> {
    try {
      const cpfExists = await Paciente.findOne({
        cpf_paciente: data.cpf_paciente,
      });

      if (cpfExists) {
        throw new AppError(Messages.PATIENT_ALREADY_EXISTS);
      }

      const cadastroPaciente = await this.pacienteRepository.create({
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

      await data.tipos_caracteristicas.map(async caracteristica => {
        await cadastroPaciente.tipos_caracteristicas.push(caracteristica);
      });

      await cadastroPaciente.save();

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
    const paciente = await this.pacienteRepository.listById(id);
    console.log(id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    if (data.hora_entrada) {
      paciente.hora_entrada = data.hora_entrada;
    }

    if (data.tipo_entrada) {
      paciente.tipo_entrada = data.tipo_entrada;
    }

    if (data.nome_paciente) {
      paciente.nome_paciente = data.nome_paciente;
    }

    if (data.nome_mae) {
      paciente.nome_mae = data.nome_mae;
    }

    if (data.data_nascimento) {
      paciente.data_nascimento = data.data_nascimento;
    }

    if (data.rg_paciente) {
      paciente.rg_paciente = data.rg_paciente;
    }

    if (data.cpf_paciente) {
      paciente.cpf_paciente = data.cpf_paciente;
    }

    if (data.cns_paciente) {
      paciente.cns_paciente = data.cns_paciente;
    }

    if (data.nacionalidade) {
      paciente.nacionalidade = data.nacionalidade;
    }

    if (data.sexo) {
      paciente.sexo = data.sexo;
    }

    if (data.estatura_aproximada) {
      paciente.estatura_aproximada = data.estatura_aproximada;
    }

    if (data.peso_aproximado) {
      paciente.peso_aproximado = data.peso_aproximado;
    }

    if (data.idade_aproximada) {
      paciente.idade_aproximada = data.idade_aproximada;
    }

    if (data.tem_barba) {
      paciente.tem_barba = data.tem_barba;
    }

    if (data.tem_bigode) {
      paciente.tem_bigode = data.tem_bigode;
    }

    if (data.sinais_particulares) {
      paciente.sinais_particulares = data.sinais_particulares;
    }

    if (data.acessorios_utilizados) {
      paciente.acessorios_utilizados = data.acessorios_utilizados;
    }

    if (data.deficiencias) {
      paciente.deficiencias = data.deficiencias;
    }

    if (data.vestimentas) {
      paciente.vestimentas = data.vestimentas;
    }

    if (data.local_encontrado) {
      paciente.local_encontrado = data.local_encontrado;
    }

    if (data.bairro) {
      paciente.bairro = data.bairro;
    }

    if (data.condicoes_encontrado) {
      paciente.condicoes_encontrado = data.condicoes_encontrado;
    }

    // update paciente
    await this.pacienteRepository.update(id, paciente);

    // se houver características alteradas
    if (data.tipos_caracteristicas.length !== 0) {
      // limpa-se o vetor de características antigas
      for (let i = paciente.tipos_caracteristicas.length; i > 0; i -= 1) {
        paciente.tipos_caracteristicas.pop();
      }
      await paciente.save();

      // insere as características novas
      await data.tipos_caracteristicas.map(async caracteristica => {
        await paciente.tipos_caracteristicas.push(caracteristica);
      });
      await paciente.save();
    }
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
