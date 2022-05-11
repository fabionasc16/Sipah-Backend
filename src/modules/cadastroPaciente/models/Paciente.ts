import mongoose from 'mongoose';

const { Schema } = mongoose;

const cadastroPaciente = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  data_entrada_unidade: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  hora_entrada: {
    type: mongoose.Schema.Types.String,
  },
  tipo_entrada: {
    type: mongoose.Schema.Types.String,
  },
  nome_paciente: {
    type: mongoose.Schema.Types.String,
  },
  nome_mae: {
    type: mongoose.Schema.Types.String,
  },
  data_nascimento: {
    type: mongoose.Schema.Types.Date,
  },
  rg_paciente: {
    type: mongoose.Schema.Types.String,
  },
  cpf_paciente: {
    type: mongoose.Schema.Types.String,
  },
  cns_paciente: {
    type: mongoose.Schema.Types.String,
  },
  nacionalidade: {
    type: mongoose.Schema.Types.String,
  },
  sexo: {
    type: mongoose.Schema.Types.String,
  },
  caracteristicas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'caracteristicas',
  },
});

const paciente = mongoose.model('paciente', cadastroPaciente);

export { paciente };
