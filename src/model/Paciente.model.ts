import moment from 'moment';
import mongoose from 'mongoose';

const { Schema } = mongoose;

function getData(data) {
  if (data !== null) {
    return moment(data).format('YYYY-MM-DD');
  }
  return null;
}

function getHora(hora) {
  if (hora !== null) {
    return moment(hora).format('HH:mm:ss');
  }
  return null;
}

function getNum(num) {
  return num.toString(10);
}

function setDate(dataString) {
  return new Date(moment(dataString).format('YYYY-MM-DD'));
}

const pacienteSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    dataEntrada: {
      type: mongoose.Schema.Types.Date,
      default: new Date(moment().format('YYYY-MM-DD')),
      get: getData,
    },
    horaEntrada: {
      type: mongoose.Schema.Types.Date,
      default: new Date().getTime(),
      get: getHora,
    },
    dataSaida: {
      type: mongoose.Schema.Types.Date,
      default: null,
      get: getData,
    },
    horaSaida: {
      type: mongoose.Schema.Types.Date,
      default: null,
      get: getHora,
    },
    formaSaida: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    modoSaida: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    numProntuario: {
      type: mongoose.Schema.Types.String,
      required: [true, 'Informe o número de prontuário'],
      unique: [true, 'Número de Prontuário já cadastrado'],
    },
    entradaAtraves: {
      type: mongoose.Schema.Types.String,
      required: [true, 'Preencha o campo: Entrada através de'],
    },
    statusRegistro: {
      type: mongoose.Schema.Types.String,
      default: 'Cadastrado',
    },
    statusPaciente: {
      type: mongoose.Schema.Types.String,
      default: 'Não identificado',
    },
    nomePaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    nomeMae: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    dataNascimento: {
      type: mongoose.Schema.Types.Date,
      default: null,
      set: setDate,
      get: getData,
    },
    rg: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    cpf: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    cns: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    nacionalidade: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    pais: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    estaturaAproximada: {
      type: mongoose.Schema.Types.Number,
      default: 0,
      get: getNum,
    },
    pesoAproximado: {
      type: mongoose.Schema.Types.Number,
      default: 0,
      get: getNum,
    },
    idadeAproximada: {
      type: mongoose.Schema.Types.Number,
      default: 0,
      get: getNum,
    },
    condicoesEncontrada: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    localEncontrado: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    sinaisParticulares: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    acessoriosUtilizados: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    vestimentas: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    barba: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    bigode: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    bairroEncontrado: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    deficiencia: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    naoInformaContato: {
      type: mongoose.Schema.Types.Boolean,
      default: null,
    },
    nomeContato: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    grauParentescoSelected: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    telefoneContato: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    cpfContato: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    genero: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    generoOutro: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    unidade: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    nomeSocialPaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    apelidoPaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    vitimaAbandono: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    querEncontro: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    autorizaConsulta: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    numRegistroExterno: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    unidadeSaudeOrigem: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    conscienciaPaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    transtornosPaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    tratamentoPsicologico: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    descricaoEstadoPaciente: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    tipoCaracteristicas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoCaracteristica',
      },
    ],
    dataIdentificacao: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    meioIdentificacao: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    observacao: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    unidadeSaudeDestino: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
  },
  { versionKey: false, toJSON: { getters: true }, id: false },
);

const Paciente = mongoose.model('paciente', pacienteSchema);

export { Paciente };
