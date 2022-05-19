import { biotipo } from '@modules/caracteristicasPaciente/biotipo/models/Biotipo';
import mongoose from 'mongoose';

import { IBiotipoRepository } from '../IBiotipoRepository';

class BiotipoRepository implements IBiotipoRepository {
  async create(desc_biotipo: string): Promise<any> {
    const result = await biotipo.create({
      biotipo: desc_biotipo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await biotipo.find({});
    return data;
  }

  async listByBiotipo(bio_tipo: string): Promise<any[]> {
    const data = await biotipo.findOne({
      bio_tipo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await biotipo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, desc_biotipo: string): Promise<void> {
    await biotipo.findByIdAndUpdate(
      { _id: id },
      {
        biotipo: desc_biotipo,
      },
    );
  }

  async delete(id: string): Promise<void> {
    await biotipo.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { BiotipoRepository };
