import { corteCabelo } from '@modules/corteCabelo/models/CorteCabelo';
import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import mongoose from 'mongoose';

class CorteCabeloRepository implements ICorteCabeloRepository {
  async create(corte_cabelo: string): Promise<any> {
    const result = await corteCabelo.create({
      corte_cabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await corteCabelo.find({});
    return data;
  }

  async listByHairCut(corte_cabelo: string): Promise<any[]> {
    const data = await corteCabelo.findOne({
      corte_cabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await corteCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, corte_cabelo: string): Promise<void> {
    await corteCabelo.findByIdAndUpdate(
      { _id: id },
      {
        corte_cabelo,
        updated_at: new Date(),
      },
    );
  }

  async delete(id: string): Promise<void> {
    await corteCabelo.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { CorteCabeloRepository };
