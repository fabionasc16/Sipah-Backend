interface ICreateCadastroPacienteDTO {
  hora_entrada: Date;
  tipo_entrada: string;
  nome_paciente: string;
  nome_mae: string;
  data_nascimento: Date;
  rg_paciente: string;
  cpf_paciente: string;
  cns_paciente: string;
  caracteristicas_id: string;
}

export { ICreateCadastroPacienteDTO };
