import mongoose from 'mongoose';

const { Schema } = mongoose;

const usuarioSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  data_cadastro: {
    type: mongoose.Schema.Types.String,
  },
  hora_cadastro: {
    type: mongoose.Schema.Types.String,
  },
  primeiro_nome: {
    type: mongoose.Schema.Types.String,
  },
  nome_completo: {
    type: mongoose.Schema.Types.String,
  },
  nome_mae: {
    type: mongoose.Schema.Types.String,
  },
  nome_pai: {
    type: mongoose.Schema.Types.String,
  },
  data_nascimento: {
    type: mongoose.Schema.Types.String,
  },
  sexo: {
    type: mongoose.Schema.Types.String,
  },
  estado_civil: {
    type: mongoose.Schema.Types.String,
  },
  nacionalidade: {
    type: mongoose.Schema.Types.String,
  },
  raca_etnia: {
    type: mongoose.Schema.Types.String,
  },
  cpf_usuario: {
    type: mongoose.Schema.Types.String,
    unique: true,
  },
  rg_usuario: {
    type: mongoose.Schema.Types.String,
  },
  tipo_usuario: {
    type: mongoose.Schema.Types.String,
  },
  nome_usuario: {
    type: mongoose.Schema.Types.String,
  },
  endereco_usuario_cep: {
    type: mongoose.Schema.Types.String,
  },
  endereco_usuario_logradouro: {
    type: mongoose.Schema.Types.String,
  },
  endereco_usuario_numero: {
    type: mongoose.Schema.Types.String,
  },
  endereco_usuario_bairro: {
    type: mongoose.Schema.Types.String,
  },
  setor: {
    type: mongoose.Schema.Types.String,
  },
  unidade_usuario: {
    type: mongoose.Schema.Types.String,
  },
});

const usuario = mongoose.model('usuario', usuarioSchema);

export { usuario };
