import mongoose from 'mongoose';

const { Schema } = mongoose;

const buscaSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  idPaciente: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'paciente',
    },
  ],
  idInteressado: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'interessado',
    },
  ]
});

const Busca = mongoose.model('buscaInteressado', buscaSchema);

export { Busca };
