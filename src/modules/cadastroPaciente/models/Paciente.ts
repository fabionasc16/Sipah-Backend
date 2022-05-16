import mongoose from 'mongoose';

const { Schema } = mongoose;

const cadastroPaciente = new Schema({
  data_entrada_unidade: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  hora_entrada: {
    type: mongoose.Schema.Types.Date,
  },
  tipo_entrada: {
    type: String,
    required: true,
    length: 30,
  },
  nome_paciente: {
    type: String,
    length: 100,
  },
  nome_mae: {
    type: String,
    length: 100,
  },
  data_nascimento: {
    type: Date,
  },
  rg_paciente: {
    type: String,
    length: 40,
  },
  cpf_paciente: {
    type: String,
    length: 40,
  },
  cns_paciente: {
    type: String,
    length: 40,
  },
  nacionalidade: {
    type: String,
    length: 40,
  },
  sexo: {
    type: String,
    length: 10,
  },
  caracteristicas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'caracteristicas',
  },
});

const paciente = mongoose.model('paciente', cadastroPaciente);

export { paciente };
