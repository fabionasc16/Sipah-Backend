import mongoose from 'mongoose';

const { Schema } = mongoose;

const corteCabeloSchema = new Schema({
  nameCorteCabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const corteCabelo = mongoose.model('CorteCabelo', corteCabeloSchema);

export { corteCabelo };
