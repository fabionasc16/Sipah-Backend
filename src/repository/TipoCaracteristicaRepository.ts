import mongoose from 'mongoose';

import { TipoCaracteristica } from '../model/TipoCaracteristica.model';
import { ITipoCaracteristicaRepository } from './ITipoCaracteristicaRepository';

class TipoCaracteristicaRepository implements ITipoCaracteristicaRepository {
  async create(name: string, id: string): Promise<any> {
    const result = await TipoCaracteristica.create({
      name,
      caracteristica: id,
    });

    return result;
  }

  async list(): Promise<any[]> {
    const data = await TipoCaracteristica.find({});
    return data;
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
