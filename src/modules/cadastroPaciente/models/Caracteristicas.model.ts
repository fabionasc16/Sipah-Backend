import mongoose from 'mongoose';

const { Schema } = mongoose;

const cadastroCaracteristicas = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    raca_etnia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'raca_etnia',
    },
    cor_olhos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cor_olhos',
    },
    biotipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'biotipo',
    },
    cor_cabelos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cor_cabelo',
    },
    tipo_cabelo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tipo_cabelo',
    },
    corte_cabelo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'corte_cabelo',
    },
    estatura_aproximada: {
      type: mongoose.Schema.Types.Number,
    },
    peso_aproximado: {
      type: mongoose.Schema.Types.Number,
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
  },
  { versionKey: false },
);

const caracteristicas = mongoose.model(
  'caracteristicas',
  cadastroCaracteristicas,
);

export { caracteristicas };
