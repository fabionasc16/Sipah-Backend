import mongoose from 'mongoose';

const { Schema } = mongoose;

const OlhosSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  cor_olhos: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const corolhos = mongoose.model('CorOlhos', OlhosSchema);

export { corolhos };
