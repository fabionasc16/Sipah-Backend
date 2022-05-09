import { ICadastroCaracteristicasRepository } from '@modules/cadastroPaciente/repositories/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from '@modules/cadastroPaciente/repositories/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

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
  caracteristicas: string;
  raca_etnia: string;
  cor_olhos: string;
  biotipo: string;
  cor_cabelos: string;
  tipo_cabelo: string;
  corte_cabelo: string;
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
}

@injectable()
class CreateCadastroPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private cadastroPaciente: ICadastroPacienteRepository,

    @inject('CadastroCaracteristicasRepository')
    private cadastroCaracteristicas: ICadastroCaracteristicasRepository,
  ) {}

  async execute(data: IRequest): Promise<any> {
    try {
      const cadastroCaracteristicas = await this.cadastroCaracteristicas.create(
        {
          raca_etnia: data.raca_etnia,
          cor_olhos: data.cor_olhos,
          biotipo: data.biotipo,
          cor_cabelos: data.cor_cabelos,
          tipo_cabelo: data.tipo_cabelo,
          corte_cabelo: data.corte_cabelo,
          estatura_aproximada: data.estatura_aproximada,
          peso_aproximado: data.peso_aproximado,
          idade_aproximada: data.idade_aproximada,
          tem_barba: data.tem_barba,
          tem_bigode: data.tem_bigode,
          sinais_particulares: data.sinais_particulares,
          acessorios_utilizados: data.acessorios_utilizados,
          deficiencias: data.deficiencias,
          vestimentas: data.vestimentas,
          local_encontrado: data.local_encontrado,
          bairro: data.bairro,
          condicoes_encontrado: data.condicoes_encontrado,
        },
      );
      if (!cadastroCaracteristicas.id) {
        throw new AppError(Messages.ERROR_SAVE_PACIENTE);
      }

      const cadastroPaciente = await this.cadastroPaciente.create({
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
        caracteristicas: cadastroCaracteristicas.id,
      });

      return cadastroPaciente;
    } catch (e) {
      throw new AppError(e.message, 500);
    }
  }
}

export { CreateCadastroPacienteUseCase };
