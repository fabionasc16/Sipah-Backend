interface IUpdatePacienteDTO {
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
  estatura_aproximada: number;
  peso_aproximado: number;
  idade_aproximada: number;
  condicoes_encontrado: string;
  local_encontrado: string;
  sinais_particulares: string;
  acessorios_utilizados: string;
  vestimentas: string;
  tem_barba: number;
  tem_bigode: number;
  bairro: string;
  deficiencias: string;
  contato_anonimo?: number;
  contato_nome?: string;
  contato_grau?: string;
  contato_telefone?: string;
  contato_cpf?: string;
  genero?: string;
  genero_informado?: string;
  unidade_saude?: string;
  nome_social?: string;
  apelido?: string;
  vitima_abandono?: number;
  deseja_buscado?: number;
  estado_consciencia?: string;
  transtorno?: string;
  sintoma_psiquico?: string;
  estado_psiquico?: string;
}

export { IUpdatePacienteDTO };
