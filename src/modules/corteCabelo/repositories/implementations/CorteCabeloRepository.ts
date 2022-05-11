import { ICreateCorteCabeloDTO } from '@modules/corteCabelo/dtos/ICreateCorteCabeloDTO';
import { IUpdateCorteCabeloDTO } from '@modules/corteCabelo/dtos/IUpdateCorteCabeloDTO';
import { corteCabelo } from '@modules/corteCabelo/models/CorteCabelo';
import { ICorteCabeloRepository } from '@modules/corteCabelo/repositories/ICorteCabeloRepository';
import mongoose from 'mongoose';

class CorteCabeloRepository implements ICorteCabeloRepository {
  async create(data: ICreateCorteCabeloDTO): Promise<any> {
    const result = await corteCabelo.create({
      nameCorteCabelo: data.nameCorteCabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await corteCabelo.find({});
    return data;
  }

  async listByHairCut(nameCorteCabelo: string): Promise<any[]> {
    const data = await corteCabelo.findOne({
      nameCorteCabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await corteCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(data: IUpdateCorteCabeloDTO): Promise<void> {
    await corteCabelo.findByIdAndUpdate(
      { _id: data.id },
      {
        nameCorteCabelo: data.nameCorteCabelo,
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
