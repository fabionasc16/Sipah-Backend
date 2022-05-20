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
  perfilUsuario: {
    type: mongoose.Schema.Types.String,
  },
  setorUsuario: {
    type: mongoose.Schema.Types.String,
  },
  unidadeUsuario: {
    type: mongoose.Schema.Types.String,
  },
  priNome: {
    type: mongoose.Schema.Types.String,
  },
  sobreNome: {
    type: mongoose.Schema.Types.String,
  },
  nomeMae: {
    type: mongoose.Schema.Types.String,
  },
  nomePai: {
    type: mongoose.Schema.Types.String,
  },
  sexo: {
    type: mongoose.Schema.Types.String,
  },
  estadoCivil: {
    type: mongoose.Schema.Types.String,
  },
  raca: {
    type: mongoose.Schema.Types.String,
  },
  dataNascimento: {
    type: mongoose.Schema.Types.String,
  },
  nacionalidade: {
    type: mongoose.Schema.Types.String,
  },
  rg: {
    type: mongoose.Schema.Types.String,
  },
  cpf: {
    type: mongoose.Schema.Types.String,
  },
  cep: {
    type: mongoose.Schema.Types.String,
  },
  logradouro: {
    type: mongoose.Schema.Types.String,
  },
  numero: {
    type: mongoose.Schema.Types.String,
  },
  bairro: {
    type: mongoose.Schema.Types.String,
  },
  municipio: {
    type: mongoose.Schema.Types.String,
  },
  estado: {
    type: mongoose.Schema.Types.String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const usuario = mongoose.model('usuario', usuarioSchema);

export { usuario };
