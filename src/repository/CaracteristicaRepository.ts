import mongoose from 'mongoose';

import { Caracteristica } from '../model/Caracteristica.model';
import { ICaracteristicaRepository } from './ICaracteristicaRepository';

class CaracteristicaRepository implements ICaracteristicaRepository {
  async create(name: string): Promise<any> {
    const result = await Caracteristica.create({
      name,
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

    let total = await Caracteristica.countDocuments(filters);
    let pageNumber = await parseInt(page);
    let pageSizeNumber = await parseInt(pageSize);

    let data = await Caracteristica.find(
      filters,
      'name',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber }).populate('tipoCaracteristicas');

    let result = await { 'page': params.page, 'pageSize': pageSize, 'total': total, 'data': data };

    return result;
  }

  async listByCaracteristica(name: string): Promise<any[]> {
    const data = await Caracteristica.findOne({
      name,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await Caracteristica.findById({
      _id: new mongoose.Types.ObjectId(id),
    }).populate('tipoCaracteristicas');
    return data;
  }

  async update(id: string, name: string): Promise<void> {
    await Caracteristica.findByIdAndUpdate(
      { _id: id },
      {
        name:name,
      },
    );
  }

  async delete(id: string): Promise<void> {
    await Caracteristica.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { CaracteristicaRepository };
