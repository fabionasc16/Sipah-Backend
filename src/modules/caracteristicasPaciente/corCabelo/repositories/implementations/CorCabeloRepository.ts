import { corCabelo } from '@modules/caracteristicasPaciente/corCabelo/models/CorCabelo';
import { ICorCabeloRepository } from '@modules/caracteristicasPaciente/corCabelo/repositories/ICorCabeloRepository';
import mongoose from 'mongoose';

class CorCabeloRepository implements ICorCabeloRepository {
  async create(cor_cabelo: string): Promise<any> {
    const result = await corCabelo.create({
      cor_cabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await corCabelo.find({});
    return data;
  }

  async listByHairColor(cor_cabelo: string): Promise<any> {
    const data = await corCabelo.findOne({
      cor_cabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await corCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, cor_cabelo: string): Promise<void> {
    await corCabelo.findByIdAndUpdate(
      { _id: id },
      {
        cor_cabelo,
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
