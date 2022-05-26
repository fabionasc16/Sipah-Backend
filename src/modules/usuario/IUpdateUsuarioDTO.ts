interface IUpdateUsuarioDTO {
  id: string;
  perfilUsuario?: string;
  setorUsuario?: string;
  unidadeUsuario?: string;
  priNome?: string;
  sobreNome?: string;
  nomeMae?: string;
  nomePai?: string;
  sexo?: string;
  estadoCivil?: string;
  raca?: string;
  dataNascimento?: string;
  nacionalidade?: string;
  rg?: string;
  cpf?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  municipio?: string;
  estado?: string;
  updated_at?: Date;
}

export { IUpdateUsuarioDTO };
