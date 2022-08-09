import mongoose from 'mongoose';

const { Schema } = mongoose;

const interesadoSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  nome: {
    type: mongoose.Schema.Types.String,
  },
  dataNascimento: {
    type: mongoose.Schema.Types.String,
  },
  estadoCivil: {
    type: mongoose.Schema.Types.String,
  },
  nomeMae: {
    type: mongoose.Schema.Types.String,
  },
  nomePai: {
    type: mongoose.Schema.Types.String,
  },
  genero: {
    type: mongoose.Schema.Types.String,
  },
  generoOutro: {
    type: mongoose.Schema.Types.String,
  },
  nacionalidade: {
    type: mongoose.Schema.Types.String,
  },
  pais: {
    type: mongoose.Schema.Types.String,
  },
  cpf: {
    type: mongoose.Schema.Types.String,
  },
  cpfSemFormatacao: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
  telefone: {
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
  complemento: {
    type: mongoose.Schema.Types.String,
  },
  municipio: {
    type: mongoose.Schema.Types.String,
  },
  estado: {
    type: mongoose.Schema.Types.String,
  },
  grauParentesco: {
    type: mongoose.Schema.Types.String,
  },
  status: {
    type: mongoose.Schema.Types.Boolean,
    default: true
  },
  excluido: {
    type: mongoose.Schema.Types.Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  busca: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'busca',
    },
  ]
});

const Interessado = mongoose.model('interessado', interesadoSchema);

export { Interessado };
