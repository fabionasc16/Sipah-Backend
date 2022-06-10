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
}

export { IUpdatePacienteDTO };
