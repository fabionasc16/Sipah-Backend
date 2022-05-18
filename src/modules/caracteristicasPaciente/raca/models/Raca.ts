import mongoose from 'mongoose';

const { Schema } = mongoose;

const RacaSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  raca_etnia: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const raca = mongoose.model('raca', RacaSchema);

export { raca };
