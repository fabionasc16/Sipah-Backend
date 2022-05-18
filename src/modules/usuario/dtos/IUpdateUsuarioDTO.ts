interface IUpdateUsuarioDTO {
  id: string;
  data_cadastro?: string;
  hora_cadastro?: string;
  primeiro_nome?: string;
  nome_completo?: string;
  nome_mae?: string;
  nome_pai?: string;
  data_nascimento?: string;
  sexo?: string;
  estado_civil?: string;
  nacionalidade?: string;
  raca_etnia?: string;
  cpf_usuario?: string;
  rg_usuario?: string;
  tipo_usuario?: string;
  endereco_usuario_cep?: string;
  endereco_usuario_logradouro?: string;
  endereco_usuario_numero?: string;
  endereco_usuario_bairro?: string;
  setor?: string;
  unidade_usuario?: string;
}

export { IUpdateUsuarioDTO };
