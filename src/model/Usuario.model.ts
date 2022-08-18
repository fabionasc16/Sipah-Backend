import moment from 'moment';
import mongoose from 'mongoose';

const { Schema } = mongoose;

function getData(data) {
  if (data !== null) {
    const datac = moment(data).format('YYYY-MM-DD');
    const year = datac.substring(0, 4);
    const mounth = datac.substring(5, 7);
    const day = datac.substring(8, 10);

    const dt = new Date(+year, +mounth - 1, +day, 0, 0, 0, 0);
    return moment(dt).format('YYYY-MM-DD');
  }
  return null;
}

function setData(dataString) {
  if (dataString !== null) {
    if (dataString !== '') {
      const dt = new Date(moment(dataString).format('YYYY-MM-DD'));
      return dt;
    }
    return null;
  }
  return null;
}

function setDataCadastro(dataString) {
  if (dataString !== null && this.hora_cadastro !== null) {
    if (dataString !== '' && this.hora_cadastro !== '') {
      const dthr = dataString + ' ' + this.hora_cadastro;
      const dt = new Date(moment(dthr).format('YYYY-MM-DD HH:mm:ss'));
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
  if (hrIN !== null && this.data_cadastro !== null) {
    if (hrIN !== '' && this.data_cadastro !== '') {
      const dthr = this.data_cadastro + ' ' + hrIN;
      const data = moment(dthr).format('YYYY-MM-DD HH:mm:ss');
      return data;
    }
    return null;
  }
  return null;
}

const usuarioSchema = new Schema({
  __v: {
    type: Number,
    select: false,
  },
  data_cadastro: {
    type: mongoose.Schema.Types.Date,
    set: setDataCadastro,
    get: getData,
  },
  hora_cadastro: {
    type: mongoose.Schema.Types.Date,
    set: setHoraEntrada,
    get: getHora,
  },
  perfilUsuario: {
    type: mongoose.Schema.Types.String,
  },
  setorUsuario: {
    type: mongoose.Schema.Types.String,
  },
  unidadeUsuario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'unidade',
    },
  ],
  nome: {
    type: mongoose.Schema.Types.String,
  },
  nomeMae: {
    type: mongoose.Schema.Types.String,
  },
  nomePai: {
    type: mongoose.Schema.Types.String,
  },
  genero: {
    type: mongoose.Schema.Types.String,
  },
  generoOutro: {
    type: mongoose.Schema.Types.String,
  },
  estadoCivil: {
    type: mongoose.Schema.Types.String,
  },
  raca: {
    type: mongoose.Schema.Types.String,
  },
  dataNascimento: {
    type: mongoose.Schema.Types.Date,
    set: setData,
    get: getData,
  },
  nacionalidade: {
    type: mongoose.Schema.Types.String,
  },
  rg: {
    type: mongoose.Schema.Types.String,
  },
  cpf: {
    type: mongoose.Schema.Types.String,
  },
  cpfSemFormatacao: {
    type: mongoose.Schema.Types.String,
  },
  cep: {
    type: mongoose.Schema.Types.String,
  },
  logradouro: {
    type: mongoose.Schema.Types.String,
  },
  complemento: {
    type: mongoose.Schema.Types.String,
  },
  numero: {
    type: mongoose.Schema.Types.String,
  },
  bairro: {
    type: mongoose.Schema.Types.String,
  },
  municipio: {
    type: mongoose.Schema.Types.String,
  },
  estado: {
    type: mongoose.Schema.Types.String,
  },
  pais: {
    type: mongoose.Schema.Types.String,
  },
  telefone: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
  status: {
    type: mongoose.Schema.Types.Boolean,
    default: true,
  },
  excluido: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export { Usuario };
