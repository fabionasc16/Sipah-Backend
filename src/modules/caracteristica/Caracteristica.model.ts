import mongoose from 'mongoose';

const { Schema } = mongoose;

const caracteristicaSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    name: {
      type: mongoose.Schema.Types.String,
    },
    tipoCaracteristicas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoCaracteristica',
      },
    ],
  },
  { versionKey: false },
);

const Caracteristica = mongoose.model('Caracteristica', caracteristicaSchema);

export { Caracteristica };
