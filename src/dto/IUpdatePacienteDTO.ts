interface IUpdatePacienteDTO {
  id: string;
  dataEntrada?: string;
  horaEntrada?: string;
  dataSaida?: string ;
  horaSaida?: string ;
  formaSaida?: string ;
  modoSaida?: string ; 
  observacao?: string;
  numProntuario?: string;
  entradaAtraves?: string;
  statusRegistro?: string;
  statusPaciente?: string;
  nomePaciente?: string;
  nomeMae?: string;
  dataNascimento?: string;
  rg?: string;
  cpf?: string;
  cns?: string;
  nacionalidade?: string;
  pais?: string;
  estaturaAproximada?: string;
  pesoAproximado?: string;
  idadeAproximada?: string;
  condicoesEncontrada?: string;
  localEncontrado?: string;
  sinaisParticulares?: string;
  acessoriosUtilizados?: string;
  vestimentas?: string;
  barba?: string;
  bigode?: string;
  bairroEncontrado?: string;
  deficiencia?: string;
  naoInformaContato?: boolean;
  nomeContato?: string;
  grauParentescoSelected?: string;
  telefoneContato?: string;
  cpfContato?: string;
  genero?: string;
  generoOutro?: string;
  unidade?: string;
  nomeSocialPaciente?: string;
  apelidoPaciente?: string;
  vitimaAbandono?: string;
  querEncontro?: string;
  autorizaConsulta?: string;
  numRegistroExterno?: string;
  unidadeSaudeOrigem?: string;
  conscienciaPaciente?: string;
  transtornosPaciente?: string;
  tratamentoPsicologico?: string;
  descricaoEstadoPaciente?: string;
  tipoCaracteristicas?: any;
}

export { IUpdatePacienteDTO };
