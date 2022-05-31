import mongoose from 'mongoose';

import { ITipoCaracteristicaRepository } from '../ITipoCaracteristicaRepository';
import { TipoCaracteristica } from '../../model/TipoCaracteristica.model';

class TipoCaracteristicaRepository implements ITipoCaracteristicaRepository {
  async create(name: string, id: string): Promise<any> {
    const result = await TipoCaracteristica.create({
      name,
      caracteristica: id,
    });

    return result;
  }

  async list(params: any) {
    let page = (params.page != null ? (params.page - 1) + '' : '0');
    let pageSize = params.pageSize != null ? params.pageSize : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $or: [{ name: search }] };
    }

    let total = await TipoCaracteristica.countDocuments(filters);
    let pageNumber = await parseInt(page);
    let pageSizeNumber = await parseInt(pageSize);

    let data = await TipoCaracteristica.find(
      filters,
      'name',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber });

    let result = await { 'page': params.page, 'pageSize': pageSize, 'total': total, 'data': data };

    return result;
  }

  async listByTipoCaracteristica(name: string, id: string): Promise<any[]> {
    const data = await TipoCaracteristica.find({
      name,
      caracteristica: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await TipoCaracteristica.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, name: string): Promise<void> {
    await TipoCaracteristica.findByIdAndUpdate(
      { _id: id },
      {
        name,
      },
    );
  }

  async delete(id: string): Promise<void> {
    await TipoCaracteristica.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { TipoCaracteristicaRepository };
