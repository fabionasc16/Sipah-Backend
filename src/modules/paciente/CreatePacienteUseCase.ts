import { TipoCaracteristica } from '@modules/tipoCaracteristica/TipoCaracteristica.model';
import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import mongoose from 'mongoose';
import { injectable, inject } from 'tsyringe';

import { IPacienteRepository } from './IPacienteRepository';

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
  caracteristicas: Array<string>;
}

@injectable()
class CreatePacienteUseCase {
  constructor(
    @inject('PacienteRepository')
    private pacienteRepository: IPacienteRepository,
  ) {}

  async execute(data: IRequest): Promise<any> {
    try {
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

      console.log(cadastroPaciente);
      console.log(cadastroPaciente.caracteristicas);

      await Promise.all(
        data.caracteristicas.map(async caracteristica => {
          const tipoCaracteristicaCreate = new TipoCaracteristica({
            ...tipoCaracteristica,
            caracteristica: caracteristicaCreated._id,
          });
          await tipoCaracteristicaCreate.save();
          // data.caracteristicas.push(caracteristica);
          console.log(caracteristica);
          cadastroPaciente.caracteristicas.push(
            new mongoose.Schema.Types.ObjectId(caracteristica),
          );
        }),
      );

      await cadastroPaciente.save();

      return cadastroPaciente;
    } catch (e) {
      throw new AppError(e.message, 500);
    }
  }
}

export { CreatePacienteUseCase };
