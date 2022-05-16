import mongoose from 'mongoose';

const { Schema } = mongoose;

const cadastroCaracteristicas = new Schema({
  raca_etnia: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  cor_olhos: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  biotipo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  cor_cabelos: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  tipo_cabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  corte_cabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  estatura_aproximada: {
    type: mongoose.Schema.Types.Decimal128,
  },
  peso_aproximado: {
    type: mongoose.Schema.Types.Decimal128,
  },
  idade_aproximada: {
    type: mongoose.Schema.Types.Number,
  },
  tem_barba: {
    type: mongoose.Schema.Types.Number,
  },
  tem_bigode: {
    type: mongoose.Schema.Types.Number,
  },
  sinais_particulares: {
    type: mongoose.Schema.Types.String,
  },
  acessorios_utilizados: {
    type: mongoose.Schema.Types.String,
  },
  deficiencias: {
    type: mongoose.Schema.Types.String,
  },
  vestimentas: {
    type: mongoose.Schema.Types.String,
  },
  local_encontrado: {
    type: mongoose.Schema.Types.String,
  },
  bairro: {
    type: mongoose.Schema.Types.String,
  },
  condicoes_encontrado: {
    type: mongoose.Schema.Types.String,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paciente',
  },
});

const caracteristicas = mongoose.model(
  'caracteristicas',
  cadastroCaracteristicas,
);

export { caracteristicas };
