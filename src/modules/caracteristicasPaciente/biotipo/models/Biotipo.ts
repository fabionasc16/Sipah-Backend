import mongoose from 'mongoose';

const { Schema } = mongoose;

const BiotipoSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  biotipo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const biotipo = mongoose.model('biotipo', BiotipoSchema);

export { biotipo };
