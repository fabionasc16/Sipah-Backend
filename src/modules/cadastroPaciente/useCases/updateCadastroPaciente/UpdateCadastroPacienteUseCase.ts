import { AppError } from 'AppError';
import { IUpdateCadastroPacienteDTO } from 'dto/IUpdateCadastroPacienteDTO';
import { IUpdateCaracteristicasPacienteDTO } from 'dto/IUpdateCaracteristicasPacienteDTO';
import { Messages } from 'messages/Messages';
import { ICadastroCaracteristicasRepository } from 'repository/ICadastroCaracteristicasRepository';
import { ICadastroPacienteRepository } from 'repository/ICadastroPacienteRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  id: string;
  hora_entrada?: string;
  tipo_entrada?: string;
  nome_paciente?: string;
  nome_mae?: string;
  data_nascimento?: string;
  rg_paciente?: string;
  cpf_paciente?: string;
  cns_paciente?: string;
  nacionalidade?: string;
  sexo?: string;
  caracteristicas?: string;
  raca_etnia?: string;
  cor_olhos?: string;
  biotipo?: string;
  cor_cabelos?: string;
  tipo_cabelo?: string;
  corte_cabelo?: string;
  estatura_aproximada?: number;
  peso_aproximado?: number;
  idade_aproximada?: number;
  tem_barba?: number;
  tem_bigode?: number;
  sinais_particulares?: string;
  acessorios_utilizados?: string;
  deficiencias?: string;
  vestimentas?: string;
  local_encontrado?: string;
  bairro?: string;
  condicoes_encontrado?: string;
}

@injectable()
class UpdateCadastroPacienteUseCase {
  constructor(
    @inject('CadastroPacienteRepository')
    private paciente: ICadastroPacienteRepository,

    @inject('CadastroCaracteristicasRepository')
    private caracteristicas: ICadastroCaracteristicasRepository,
  ) {}

  async execute(data: IRequest): Promise<void> {
    const paciente = await this.paciente.loadById(data.id);
    if (!paciente) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    const caracteristicasPaciente = await this.caracteristicas.loadById(
      paciente.caracteristicas,
    );
    if (!caracteristicasPaciente) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
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

    if (data.raca_etnia) {
      caracteristicasPaciente.raca_etnia = data.raca_etnia;
    }

    if (data.cor_olhos) {
      caracteristicasPaciente.cor_olhos = data.cor_olhos;
    }

    if (data.biotipo) {
      caracteristicasPaciente.biotipo = data.biotipo;
    }

    if (data.cor_cabelos) {
      caracteristicasPaciente.cor_cabelos = data.cor_cabelos;
    }

    if (data.tipo_cabelo) {
      caracteristicasPaciente.tipo_cabelo = data.tipo_cabelo;
    }

    if (data.corte_cabelo) {
      caracteristicasPaciente.corte_cabelo = data.corte_cabelo;
    }

    if (data.estatura_aproximada) {
      caracteristicasPaciente.estatura_aproximada = data.estatura_aproximada;
    }

    if (data.peso_aproximado) {
      caracteristicasPaciente.peso_aproximado = data.peso_aproximado;
    }

    if (data.idade_aproximada) {
      caracteristicasPaciente.idade_aproximada = data.idade_aproximada;
    }

    if (data.tem_barba) {
      caracteristicasPaciente.tem_barba = data.tem_barba;
    }

    if (data.tem_bigode) {
      caracteristicasPaciente.tem_bigode = data.tem_bigode;
    }

    if (data.sinais_particulares) {
      caracteristicasPaciente.sinais_particulares = data.sinais_particulares;
    }

    if (data.acessorios_utilizados) {
      caracteristicasPaciente.acessorios_utilizados =
        data.acessorios_utilizados;
    }

    if (data.deficiencias) {
      caracteristicasPaciente.deficiencias = data.deficiencias;
    }

    if (data.vestimentas) {
      caracteristicasPaciente.vestimentas = data.vestimentas;
    }

    if (data.local_encontrado) {
      caracteristicasPaciente.local_encontrado = data.local_encontrado;
    }

    if (data.local_encontrado) {
      caracteristicasPaciente.local_encontrado = data.local_encontrado;
    }

    if (data.bairro) {
      caracteristicasPaciente.bairro = data.bairro;
    }

    if (data.condicoes_encontrado) {
      caracteristicasPaciente.condicoes_encontrado = data.condicoes_encontrado;
    }

    await this.paciente.update(paciente);
    await this.caracteristicas.update(caracteristicasPaciente);
  }
}

export { UpdateCadastroPacienteUseCase };
