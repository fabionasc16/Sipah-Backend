import moment from 'moment';
import mongoose from 'mongoose';

const { Schema } = mongoose;

function getData(data) {
  if (data !== null) {
    const datac = moment(data).format('YYYY-MM-DD');
    const year = datac.substring(0, 4);
    const mounth = datac.substring(5, 7);
    const day = datac.substring(8, 10);

    // const hr = new Date(+year, +mounth - 1, +day + 1, 0, 0, 0, 0);
    const hr = new Date(+year, +mounth - 1, +day, 0, 0, 0, 0);
    return moment(hr).format('YYYY-MM-DD');
  }
  return null;
}

function setData(dataString) {
  if (dataString !== '') {
    const dt = new Date(moment(dataString).format('YYYY-MM-DD'));
    return dt;
  }
  return null;
}

function getHora(hora) {
  if (hora !== null) {
    return moment(hora).format('HH:mm:ss');
  }
  return null;
}

function setHoraEntrada(hrIN) {
  // const data = moment(this.dataEntrada).format('YYYY-MM-DD');
  // const year = data.substring(0, 4);
  // const mounth = data.substring(5, 7);
  // const day = data.substring(8, 10);

  const hour = hrIN.substring(0, 2);
  const min = hrIN.substring(3, 5);
  const sec = hrIN.substring(6, 8);

  // const hr = new Date(+year, +mounth - 1, +day - 1, +hour, +min, +sec, 0);
  const hr = new Date(0, 0, 0, +hour, +min, +sec, 0);
  return hr;
}

function setHoraSaida(hrOut) {
  // const data = moment(this.dataSaida).format('YYYY-MM-DD');
  // const year = data.substring(0, 4);
  // const mounth = data.substring(5, 7);
  // const day = data.substring(8, 10);

  const hour = hrOut.substring(0, 2);
  const min = hrOut.substring(3, 5);
  const sec = hrOut.substring(6, 8);

  // const hr = new Date(+year, +mounth - 1, +day - 1, +hour, +min, +sec, 0);
  const hr = new Date(0, 0, 0, +hour, +min, +sec, 0);
  return hr;
}

function getNum(num) {
  return num.toString(10);
}

function setNum(num) {
  return Number(num);
}

function getImgPrincipal() {
  if (this.imgPrincipal !== null) {
    return this.imgPrincipal.imagens.toString();
  }
  return null;
}

function getStatusRegistro(status) {
  switch (status) {
    case 1:
      return 'Cadastrado';
      break;

    case 2:
      return 'Atualizado';
      break;

    case 3:
      return 'Finalizado';
      break;

    default:
      break;
  }
}

function setStatusRegistro(status) {
  switch (status) {
    case 'Cadastrado':
      return 1;
      break;

    case 'Atualizado':
      return 2;
      break;

    case 'Finalizado':
      return 3;
      break;

    default:
      break;
  }
}

const pacienteSchema = new Schema(
  {
    __v: {
      type: Number,
      select: false,
    },
    dataEntrada: {
      type: mongoose.Schema.Types.Date,
      required: [true, 'Preencha o campo: Data de Entrada'],
      set: setData,
      get: getData,
    },
    horaEntrada: {
      type: mongoose.Schema.Types.Date,
      required: [true, 'Preencha o campo: Hora de Entrada'],
      set: setHoraEntrada,
      get: getHora,
    },
    dataSaida: {
      type: mongoose.Schema.Types.Date,
      default: null,
      set: setData,
      get: getData,
    },
    horaSaida: {
      type: mongoose.Schema.Types.Date,
      default: null,
      set: setHoraSaida,
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
      type: mongoose.Schema.Types.Number,
      default: 1,
      set: setStatusRegistro,
      get: getStatusRegistro,
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
      set: setData,
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
      set: setNum,
      get: getNum,
    },
    pesoAproximado: {
      type: mongoose.Schema.Types.Number,
      default: 0,
      set: setNum,
      get: getNum,
    },
    idadeAproximada: {
      type: mongoose.Schema.Types.Number,
      default: 0,
      set: setNum,
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
    interessado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'interessado',
    },
    dataIdentificacao: {
      type: mongoose.Schema.Types.Date,
      default: null,
      set: setData,
      get: getData,
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
    imgPrincipal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'imagensPaciente',
      default: null,
      // get: getImgPrincipal,
    },
    imgPrincipalStr: {
      type: mongoose.Schema.Types.String,
      get: getImgPrincipal,
    },
  },
  { versionKey: false, toJSON: { getters: true }, id: false },
);

const Paciente = mongoose.model('paciente', pacienteSchema);

export { Paciente };
