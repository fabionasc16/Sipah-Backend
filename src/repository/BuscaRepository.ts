import { IBuscaRepository} from './IBuscaRepository';
import { Busca } from '../model/BuscaInteressado.model'
import { Messages } from 'messages/Messages';
import { AppError } from 'AppError';
import moment from 'moment';
import mongoose from 'mongoose';

class BuscaRepository implements IBuscaRepository {

  //private usuario = usuario;

  async create(BuscaCadastro: any): Promise<any> {
    const cadastroBusca = await Busca.create(BuscaCadastro);

    return cadastroBusca;
  }

  async listByCPF(cpf: string): Promise<any[]> {
    const data = await Busca.findOne({
      cpf
    });
    return data;
  }

  async listByIdPaciente(idPaciente: string): Promise<any[]> {
    const data = await Busca.findOne({
      idPaciente
    });
    return data;
  }

  async listByIdInteressado(idInteressado: string): Promise<any[]> {
    const data = await Busca.findOne({
      idInteressado
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await Busca.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllBusca(params: any) {
    let page = (params.currentPage != null ? (params.currentPage) + '' : '1');
    let pageSize = params.perPage != null ? params.perPage : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $and: [{ $or: [{ idPaciente: search }, { idInteressado: search }] }, { excluido: false }] };
    }

    let total = await Busca.countDocuments(filters);
    let pageNumber = await parseInt(page) - 1;
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Busca.find(
      filters,
      ' idPaciente idInteressado',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber, sort: { status: -1, nome: 1 } });

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }

  /*async mudarStatus(id: string): Promise<void> {
    let interessadoEncontrado = await Interessado.findById({ _id: id });
    let status = !interessadoEncontrado.status;
    await Interessado.findByIdAndUpdate(
      { _id: id },
      { status }

    );
    return await Interessado.findById({ _id: id });
  }*/

}

export { BuscaRepository };
