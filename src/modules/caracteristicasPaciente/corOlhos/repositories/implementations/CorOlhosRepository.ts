import { corolhos } from '@modules/caracteristicasPaciente/corOlhos/models/Olhos';
import mongoose from 'mongoose';

import { ICorOlhosRepository } from '../ICorOlhosRepository';

class CorOlhosRepository implements ICorOlhosRepository {
  async create(cor_olhos: string): Promise<any> {
    const result = await corolhos.create({
      cor_olhos,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await corolhos.find({});
    return data;
  }

  async listByHairColor(cor_olhos: string): Promise<any[]> {
    const data = await corolhos.findOne({
      cor_olhos,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await corolhos.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, cor_olhos: string): Promise<void> {
    await corolhos.findByIdAndUpdate(
      { _id: id },
      {
        cor_olhos,
        updated_at: new Date(),
      },
    );
  }

  async delete(id: string): Promise<void> {
    await corolhos.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { CorOlhosRepository };
