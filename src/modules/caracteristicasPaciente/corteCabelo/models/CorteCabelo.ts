import mongoose from 'mongoose';

const { Schema } = mongoose;

const corteCabeloSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  corte_cabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const corteCabelo = mongoose.model('cortecabelo', corteCabeloSchema);

export { corteCabelo };
