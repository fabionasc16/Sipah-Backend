import mongoose from 'mongoose';

const { Schema } = mongoose;

const imagens = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    imagens: [
      {
        type: mongoose.Schema.Types.String,
      },
    ],
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'paciente',
    },
  },
  { versionKey: false },
);

const imagensPaciente = mongoose.model('imagensPaciente', imagens);
export { imagensPaciente };
