import mongoose from 'mongoose';

const { Schema } = mongoose;

const termo = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    termo: {
      type: mongoose.Schema.Types.String,
    },
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'paciente',
    },
  },
  { versionKey: false },
);

const termoPaciente = mongoose.model('termoPaciente', termo);
export { termoPaciente };
