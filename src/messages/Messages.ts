export enum Messages {
  // * Cadastros de Pacientes
  USUARIO_ALREADY_EXISTS = 'Já existe um registro de usuario no sistema com este CPF',
  PACIENTE_ALREADY_EXISTS = 'Já existe um registro de paciente no sistema. Por favor, verifique o nome do paciente e se ele já possui cadastro em outra unidade',
  ERROR_SAVING_PACIENTE = 'Erro ao recuperar as características informadas. Contate o administrador do sistema para mais detalhes',
  NO_PACIENTES_REGISTERED = 'Não há pacientes cadastrados no sistema. Cadastre uma nova entrada e tente novamente',
  NO_USUARIO_REGISTERED = 'Não há usuario cadastrados no sistema. Cadastre uma nova entrada e tente novamente',
  PACIENTE_NOT_FOUND = 'Nenhum paciente foi encontrado no sistema com as informações passadas. Verifique os dados e tente novamente',
  IMAGEM_NOT_FOUND = 'Nenhuma imagem foi encontrado no sistema com as informações passadas. Verifique os dados e tente novamente',

  // * Características de Pacientes
  CHARACTERISTICS_NOT_FOUND = 'Nenhuma característica foi encontrada no sistema com as informações passadas. Verifique os dados e tente novamente',
  CHARACTERISTICS_ALREADY_EXISTS = 'Já existe uma característica registrada com essas informações. Verifique as informações e tente novamente',
  PATIENT_ALREADY_EXISTS = 'Já existe um paciente registrado com essas informações. Verifique as informações e tente novamente',
  // * Parâmetros ausentes
  MISSING_PARAMETERS = 'Os seguintes parâmetros são necessários para a execução da operação',

  // * Erros de Servidor
  INTERNAL_SERVER_ERROR = 'Ocorreu um erro inesperado no sistema. Contate o administrador do sistema para mais detalhes. Log do Erro:',
}
