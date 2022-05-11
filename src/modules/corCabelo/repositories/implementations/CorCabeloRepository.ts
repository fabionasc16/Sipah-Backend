import { ICreateCorCabeloDTO } from '@modules/corCabelo/dtos/ICreateCorCabeloDTO';
import { IUpdateCorCabeloDTO } from '@modules/corCabelo/dtos/IUpdateCorCabeloDTO';
import { corCabelo } from '@modules/corCabelo/models/CorCabelo';
import { ICorCabeloRepository } from '@modules/corCabelo/repositories/ICorCabeloRepository';
import mongoose from 'mongoose';

class CorCabeloRepository implements ICorCabeloRepository {
  async create(data: ICreateCorCabeloDTO): Promise<any> {
    const result = await corCabelo.create({
      nameCorCabelo: data.nameCorCabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await corCabelo.find({});
    return data;
  }

  async listByHairColor(nameCorCabelo: string): Promise<any[]> {
    const data = await corCabelo.findOne({
      nameCorCabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await corCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(data: IUpdateCorCabeloDTO): Promise<void> {
    await corCabelo.findByIdAndUpdate(
      { _id: data.id },
      {
        nameCorCabelo: data.nameCorCabelo,
        updated_at: new Date(),
      },
    );
  }

  async delete(id: string): Promise<void> {
    await corCabelo.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { CorCabeloRepository };
