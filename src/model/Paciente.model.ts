import mongoose from 'mongoose';

const { Schema } = mongoose;

const pacienteSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    dataEntrada: {
      type: mongoose.Schema.Types.String,
    },
    horaEntrada: {
      type: mongoose.Schema.Types.String,
    },
    numProntuario: {
      type: mongoose.Schema.Types.String,
    },
    entradaAtraves: {
      type: mongoose.Schema.Types.String,
    },
    statusRegistro: {
      type: mongoose.Schema.Types.String,
    },
    statusPaciente: {
      type: mongoose.Schema.Types.String,
    },
    nomePaciente: {
      type: mongoose.Schema.Types.String,
    },
    nomeMae: {
      type: mongoose.Schema.Types.String,
    },
    dataNascimento: {
      type: mongoose.Schema.Types.String,
    },
    rg: {
      type: mongoose.Schema.Types.String,
    },
    cpf: {
      type: mongoose.Schema.Types.String,
    },
    cns: {
      type: mongoose.Schema.Types.String,
    },
    nacionalidade: {
      type: mongoose.Schema.Types.String,
    },
    pais: {
      type: mongoose.Schema.Types.String,
    },
    estaturaAproximada: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    pesoAproximado: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    idadeAproximada: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    condicoesEncontrada: {
      type: mongoose.Schema.Types.String,
    },
    localEncontrado: {
      type: mongoose.Schema.Types.String,
    },
    sinaisParticulares: {
      type: mongoose.Schema.Types.String,
    },
    acessoriosUtilizados: {
      type: mongoose.Schema.Types.String,
    },
    vestimentas: {
      type: mongoose.Schema.Types.String,
    },
    barba: {
      type: mongoose.Schema.Types.String,
    },
    bigode: {
      type: mongoose.Schema.Types.String,
    },
    bairroEncontrado: {
      type: mongoose.Schema.Types.String,
    },
    deficiencia: {
      type: mongoose.Schema.Types.String,
    },
    naoInformaContato: {
      type: mongoose.Schema.Types.Boolean,
    },
    nomeContato: {
      type: mongoose.Schema.Types.String,
    },
    grauParentescoSelected: {
      type: mongoose.Schema.Types.String,
    },
    telefoneContato: {
      type: mongoose.Schema.Types.String,
    },
    cpfContato: {
      type: mongoose.Schema.Types.String,
    },
    genero: {
      type: mongoose.Schema.Types.String,
    },
    generoOutro: {
      type: mongoose.Schema.Types.String,
    },
    unidade: {
      type: mongoose.Schema.Types.String,
    },
    nomeSocialPaciente: {
      type: mongoose.Schema.Types.String,
    },
    apelidoPaciente: {
      type: mongoose.Schema.Types.String,
    },
    vitimaAbandono: {
      type: mongoose.Schema.Types.String,
    },
    querEncontro: {
      type: mongoose.Schema.Types.String,
    },
    autorizaConsulta: {
      type: mongoose.Schema.Types.String,
    },
    numRegistroExterno: {
      type: mongoose.Schema.Types.String,
    },
    unidadeSaudeOrigem: {
      type: mongoose.Schema.Types.String,
    },
    conscienciaPaciente: {
      type: mongoose.Schema.Types.String,
    },
    transtornosPaciente: {
      type: mongoose.Schema.Types.String,
    },
    tratamentoPsicologico: {
      type: mongoose.Schema.Types.String,
    },
    descricaoEstadoPaciente: {
      type: mongoose.Schema.Types.String,
    },
    tipoCaracteristicas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoCaracteristica',
      },
    ],
    interessado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'interessado',
    },
    dataIdentificacao: {
      type: mongoose.Schema.Types.String,
    },
    meioIdentificacao: {
      type: mongoose.Schema.Types.String,
    },
  },
  { versionKey: false },
);

const Paciente = mongoose.model('paciente', pacienteSchema);

export { Paciente };
