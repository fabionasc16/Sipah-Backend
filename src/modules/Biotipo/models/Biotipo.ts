import mongoose from 'mongoose';

const { Schema } = mongoose;

const BiotipoSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  bio_tipo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const biotipo = mongoose.model('Biotipo', BiotipoSchema);

export { biotipo };
