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
    const page = params.page != null ? `${params.page - 1}` : '0';
    const pageSize = params.pageSize != null ? params.pageSize : '10';
    const search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $or: [{ name: { $regex: `.*${search}.*` } }] };
    }

    const total = await Caracteristica.countDocuments(filters);
    const pageNumber = await parseInt(page);
    const pageSizeNumber = await parseInt(pageSize);

    const data = await Caracteristica.find(filters, 'name', {
      skip: pageNumber * pageSizeNumber,
      limit: pageSizeNumber,
    }).populate('tipoCaracteristicas');

    return {
      page: params.page,
      pageSize,
      total,
      data,
    };
  }

  async listByCaracteristica(name: string): Promise<any> {
    return Caracteristica.findOne({
      name,
    });
  }

  async listById(id: string): Promise<any> {
    return Caracteristica.findById({
      _id: new mongoose.Types.ObjectId(id),
    }).populate('tipoCaracteristicas');
  }

  async update(id: string, name: string, data: any[]): Promise<void> {
    await Caracteristica.findByIdAndUpdate(
      { _id: id },
      {
        name,
        tipoCaracteristicas: data,
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
