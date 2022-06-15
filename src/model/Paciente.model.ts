import mongoose from 'mongoose';

const { Schema } = mongoose;

const pacienteSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    data_entrada_unidade: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
    },
    hora_entrada: {
      type: mongoose.Schema.Types.String,
    },
    tipo_entrada: {
      type: mongoose.Schema.Types.String,
    },
    nome_paciente: {
      type: mongoose.Schema.Types.String,
    },
    nome_mae: {
      type: mongoose.Schema.Types.String,
    },
    data_nascimento: {
      type: mongoose.Schema.Types.Date,
    },
    rg_paciente: {
      type: mongoose.Schema.Types.String,
    },
    cpf_paciente: {
      type: mongoose.Schema.Types.String,
    },
    cns_paciente: {
      type: mongoose.Schema.Types.String,
    },
    nacionalidade: {
      type: mongoose.Schema.Types.String,
    },
    sexo: {
      type: mongoose.Schema.Types.String,
    },
    estatura_aproximada: {
      type: mongoose.Schema.Types.Number,
    },
    peso_aproximado: {
      type: mongoose.Schema.Types.Number,
    },
    idade_aproximada: {
      type: mongoose.Schema.Types.Number,
    },
    tem_barba: {
      type: mongoose.Schema.Types.Number,
    },
    tem_bigode: {
      type: mongoose.Schema.Types.Number,
    },
    sinais_particulares: {
      type: mongoose.Schema.Types.String,
    },
    acessorios_utilizados: {
      type: mongoose.Schema.Types.String,
    },
    deficiencias: {
      type: mongoose.Schema.Types.String,
    },
    vestimentas: {
      type: mongoose.Schema.Types.String,
    },
    local_encontrado: {
      type: mongoose.Schema.Types.String,
    },
    bairro: {
      type: mongoose.Schema.Types.String,
    },
    condicoes_encontrado: {
      type: mongoose.Schema.Types.String,
    },
    contato_anonimo: {
      type: mongoose.Schema.Types.Number,
    },
    contato_nome: {
      type: mongoose.Schema.Types.String,
    },
    contato_grau: {
      type: mongoose.Schema.Types.String,
    },
    contato_telefone: {
      type: mongoose.Schema.Types.String,
    },
    contato_cpf: {
      type: mongoose.Schema.Types.String,
    },
    genero: {
      type: mongoose.Schema.Types.String,
    },
    genero_informado: {
      type: mongoose.Schema.Types.String,
    },
    unidade_saude: {
      type: mongoose.Schema.Types.String,
    },
    nome_social: {
      type: mongoose.Schema.Types.String,
    },
    apelido: {
      type: mongoose.Schema.Types.String,
    },
    vitima_abandono: {
      type: mongoose.Schema.Types.Number,
    },
    deseja_buscado: {
      type: mongoose.Schema.Types.Number,
    },
    estado_consciencia: {
      type: mongoose.Schema.Types.String,
    },
    transtorno: {
      type: mongoose.Schema.Types.String,
    },
    sintoma_psiquico: {
      type: mongoose.Schema.Types.String,
    },
    estado_psiquico: {
      type: mongoose.Schema.Types.String,
    },
    tipos_caracteristicas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoCaracteristica',
      },
    ],
  },
  { versionKey: false },
);

const Paciente = mongoose.model('paciente', pacienteSchema);

export { Paciente };
