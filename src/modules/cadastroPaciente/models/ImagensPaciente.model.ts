import mongoose from 'mongoose';

const { Schema } = mongoose;

const imagens = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  imagens: {
    type: mongoose.Schema.Types.Array,
    default: [],
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paciente',
  },
});

const imagensPaciente = mongoose.model('imagensPaciente', imagens);
export { imagensPaciente };
