import mongoose from 'mongoose';

const { Schema } = mongoose;

const tipoCaracteristicaSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  name: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
  caracteristica: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'caracteristica',
  },
});

const TipoCaracteristica = mongoose.model(
  'TipoCaracteristica',
  tipoCaracteristicaSchema,
);

export { TipoCaracteristica };
