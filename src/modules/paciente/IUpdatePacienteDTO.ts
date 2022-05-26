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
  caracteristicas?: Array<string>;
}

export { IUpdatePacienteDTO };
