import mongoose from 'mongoose';

const { Schema } = mongoose;

const corCabeloSchema = new Schema({
  nameCorCabelo: {
    type: mongoose.Schema.Types.String,
    length: 60,
  },
});

const corCabelo = mongoose.model('CorCabelo', corCabeloSchema);

export { corCabelo };
