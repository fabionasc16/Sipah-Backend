import { ICreateTipoCabeloDTO } from '@modules/tipoCabelo/dtos/ICreateTipoCabeloDTO';
import { IUpdateTipoCabeloDTO } from '@modules/tipoCabelo/dtos/IUpdateTipoCabeloDTO';
import { tipoCabelo } from '@modules/tipoCabelo/models/TipoCabelo';
import { ITipoCabeloRepository } from '@modules/tipoCabelo/repositories/ITipoCabeloRepository';
import mongoose from 'mongoose';

class TipoCabeloRepository implements ITipoCabeloRepository {
  async create(data: ICreateTipoCabeloDTO): Promise<any> {
    const result = await tipoCabelo.create({
      nameTipoCabelo: data.nameTipoCabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await tipoCabelo.find({});
    return data;
  }

  async listByHairType(nameTipoCabelo: string): Promise<any[]> {
    const data = await tipoCabelo.findOne({
      nameTipoCabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await tipoCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(data: IUpdateTipoCabeloDTO): Promise<void> {
    await tipoCabelo.findByIdAndUpdate(
      { _id: data.id },
      {
        nameTipoCabelo: data.nameTipoCabelo,
        updated_at: new Date(),
      },
    );
  }

  async delete(id: string): Promise<void> {
    await tipoCabelo.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { TipoCabeloRepository };
