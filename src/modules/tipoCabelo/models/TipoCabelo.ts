import mongoose from 'mongoose';

const { Schema } = mongoose;

const tipoCabeloSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  tipo_cabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const tipoCabelo = mongoose.model('tipocabelo', tipoCabeloSchema);

export { tipoCabelo };
