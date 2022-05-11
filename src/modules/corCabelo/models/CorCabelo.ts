import mongoose from 'mongoose';

const { Schema } = mongoose;

const corCabeloSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  cor_cabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const corCabelo = mongoose.model('CorCabelo', corCabeloSchema);

export { corCabelo };
