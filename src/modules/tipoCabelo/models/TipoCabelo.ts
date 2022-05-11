import mongoose from 'mongoose';

const { Schema } = mongoose;

const tipoCabeloSchema = new Schema({
  nameTipoCabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const tipoCabelo = mongoose.model('TipoCabelo', tipoCabeloSchema);

export { tipoCabelo };
