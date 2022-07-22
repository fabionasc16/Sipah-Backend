import mongoose from 'mongoose';

const { Schema } = mongoose;

const unidadeSaudeSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    name: {
      type: mongoose.Schema.Types.String,
    },
  },
  { versionKey: false, toJSON: { getters: true }, id: false },
);

const UnidadeSaude = mongoose.model('unidadeSaude', unidadeSaudeSchema);

export { UnidadeSaude };
