import mongoose from 'mongoose';

const { Schema } = mongoose;

const unidadeSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  nome: {
    type: mongoose.Schema.Types.String,
  },
  status: {
    type: mongoose.Schema.Types.Boolean,
    default: true,
  },
  excluido: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
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

const Unidade = mongoose.model('unidade', unidadeSchema);

export { Unidade };
