import mongoose from 'mongoose';

import { Caracteristica } from '../../model/Caracteristica.model';
import { ICaracteristicaRepository } from '../../repository/ICaracteristicaRepository';

class CaracteristicaRepository implements ICaracteristicaRepository {
  async create(name: string): Promise<any> {
    const result = await Caracteristica.create({
      name,
    });

    return result;
  }

  async list(): Promise<any[]> {
    const data = await Caracteristica.find().populate('tipoCaracteristicas');
    return data;
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
        name,
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
