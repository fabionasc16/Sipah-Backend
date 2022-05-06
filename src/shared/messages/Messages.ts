export enum Messages {
  PACIENTE_ALREADY_EXISTS = 'Já existe um registro de paciente no sistema. Por favor, verifique o nome do paciente e se ele já possui cadastro em outra unidade',
  INTERNAL_SERVER_ERROR = 'Ocorreu um erro inesperado no sistema. Contate o administrador do sistema para mais detalhes. Log do Erro:',
  ERROR_SAVE_PACIENTE = 'Erro ao recuperar as características informadas. Contate o administrador do sistema para mais detalhes',
  NO_PACIENTES_REGISTERED = 'Não há pacientes cadastrados no sistema. Cadastre uma nova entrada e tente novamente',

  // ! Rotas Inexistentes
  ROUTE_NOT_FOUND = 'A rota informada não existe no sistema. Verifique a URL e tente novamente',
}
