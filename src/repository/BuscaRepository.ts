import { IBuscaRepository} from './IBuscaRepository';
import { Busca } from '../model/Busca.model'
import { Messages } from 'messages/Messages';
import { AppError } from 'AppError';
import moment from 'moment';
import mongoose from 'mongoose';

class BuscaRepository implements IBuscaRepository {

  async create(BuscaCadastro: any): Promise<any> {
    const cadastroBusca = await Busca.create(BuscaCadastro);

    return cadastroBusca;
  }

  async listByPaciente(params: any) {
    let page = (params.currentPage != null ? (params.currentPage) + '' : '1');
    let pageSize = params.perPage != null ? params.perPage : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $and: [{ $or: [{ Paciente: search }, { Interessado: search }] }, { excluido: false }] };
    }

    let total = await Busca.countDocuments(filters);
    let pageNumber = await parseInt(page) - 1;
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Busca.find(
      filters,
      ' Paciente ',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber, sort: { status: -1, nome: 1 } });

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }

  async listByInteressado(params: any) {
    let page = (params.currentPage != null ? (params.currentPage) + '' : '1');
    let pageSize = params.perPage != null ? params.perPage : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $and: [{ $or: [{ Paciente: search }, { Interessado: search }] }, { excluido: false }] };
    }

    let total = await Busca.countDocuments(filters);
    let pageNumber = await parseInt(page) - 1;
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Busca.find(
      filters,
      ' Interessado ',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber, sort: { status: -1, nome: 1 } });

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }

  async listAllBusca(params: any) {
    let page = (params.currentPage != null ? (params.currentPage) + '' : '1');
    let pageSize = params.perPage != null ? params.perPage : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $and: [{ $or: [{ Paciente: search }, { Interessado: search }] }] };
    }

    let total = await Busca.countDocuments(filters);
    let pageNumber = await parseInt(page) - 1;
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Busca.find(
      filters,
      ' Paciente Interessado',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber, sort: { status: -1, nome: 1 } }).populate('Paciente').populate('Interessado');

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }

  async listById(id: string): Promise<any> {
    const data = await Busca.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

}

export { BuscaRepository };
