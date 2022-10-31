import moment from 'moment';
import mongoose from 'mongoose';

const { Schema } = mongoose;

function getData(data) {
  if (data !== null) {
    return moment(data).format('YYYY-MM-DD');
  }
  return null;
}

function setDataEntrada(dataString) {
  if (dataString !== null) {
    if (dataString !== '') {
      let dthr;
      if (this.horaEntrada) {
        // dthr = `${dataString} ${this.horaEntrada}`;
        // const dt = new Date(moment(dthr).format('YYYY-MM-DD HH:mm:ss'));
        const dt = new Date(moment(dataString).format('YYYY-MM-DD HH:mm:ss'));
        return dt;
      }
      dthr = `${dataString}`;
      const dt = new Date(moment(dthr).format('YYYY-MM-DD HH:mm:ss'));
      return dt;
    }
    return null;
  }
  return null;
}

function setDataSaida(dataString) {
  if (dataString !== null) {
    if (dataString !== '') {
      let dthr;
      if (!this.horaSaida) {
        dthr = `${dataString}`;
      } else {
        dthr = `${dataString} ${this.horaSaida}`;
      }

      const dt = new Date(moment(dthr).format('YYYY-MM-DD HH:mm:ss'));
      return dt;
    }
    return null;
  }
  return null;
}

function setdataNascimento(dataString) {
  if (dataString !== null) {
    if (dataString !== '') {
      const dt = new Date(moment(dataString).format('YYYY-MM-DD HH:mm:ss'));
      return dt;
    }
    return null;
  }
  return null;
}

function setdataIdentificacao(dataString) {
  if (dataString !== null) {
    if (dataString !== '') {
      const dt = new Date(moment(dataString).format('YYYY-MM-DD HH:mm:ss'));
      return dt;
    }
    return null;
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
  if (hrIN !== null) {
    if (hrIN !== '') {
      try {
        if (this.dataEntrada) {
          const dthr = `${this.dataEntrada} ${hrIN}`;
          const data = moment(dthr).format('YYYY-MM-DD HH:mm:ss');
          return data;
        }
        const data = moment(hrIN).format('YYYY-MM-DD HH:mm:ss');
        return data;
      } catch (error) {
        return null;
      }
    }
    return null;
  }
  return null;
}

function setHoraSaida(hrOut) {
  if (hrOut !== null) {
    if (hrOut !== '') {
      try {
        if (this.dataSaida) {
          const dthr = `${this.dataSaida} ${hrOut}`;
          const data = moment(dthr).format('YYYY-MM-DD HH:mm:ss');
          return data;
        }
        const data = moment(hrOut).format('YYYY-MM-DD HH:mm:ss');
        return data;
      } catch (error) {
        return null;
      }
    }
    return null;
  }
  return null;
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

function setExternalId() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const first = `000${firstPart.toString(36)}`.slice(-3);
  const second = `000${secondPart.toString(36)}`.slice(-3);
  return first + second;
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
      return '';
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
      return 1;
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
      set: setDataEntrada,
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
      set: setDataSaida,
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
      default: '',
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
      uppercase: true,
      trim: true,
    },
    nomeMae: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
    dataNascimento: {
      type: mongoose.Schema.Types.Date,
      default: null,
      set: setdataNascimento,
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
    cpfSemFormatacao: {
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
      set: setdataIdentificacao,
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
    externalId: {
      type: mongoose.Schema.Types.String,
      default: setExternalId,
      unique: [true, 'External ID in Use'],
    },
    numProntuarioOrigem: {
      type: mongoose.Schema.Types.String,
      default: '',
    },
  },
  { versionKey: false, toJSON: { getters: true }, id: false },
);

pacienteSchema.index({ numProntuario: 1, unidade: 1 }, { unique: true });

const Paciente = mongoose.model('paciente', pacienteSchema);

export { Paciente };
