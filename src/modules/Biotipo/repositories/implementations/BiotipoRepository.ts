import { biotipo } from '@modules/Biotipo/models/Biotipo';
import { IBiotipoRepository } from '../IBiotipoRepository';
import mongoose from 'mongoose';

class BiotipoRepository implements IBiotipoRepository {
  async create(bio_tipo: string): Promise<any> {
    const result = await biotipo.create({
      bio_tipo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await biotipo.find ({});
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

  async update(id: string, bio_tipo: string): Promise<void> {
    await biotipo.findByIdAndUpdate(
      { _id: id },
      {
        bio_tipo,
        updated_at: new Date(),
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
