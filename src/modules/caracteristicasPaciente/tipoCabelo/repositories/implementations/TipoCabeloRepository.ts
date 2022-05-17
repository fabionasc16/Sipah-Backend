import { tipoCabelo } from '@modules/caracteristicasPaciente/tipoCabelo/models/TipoCabelo';
import { ITipoCabeloRepository } from '@modules/caracteristicasPaciente/tipoCabelo/repositories/ITipoCabeloRepository';
import mongoose from 'mongoose';

class TipoCabeloRepository implements ITipoCabeloRepository {
  async create(tipo_cabelo: string): Promise<any> {
    const result = await tipoCabelo.create({
      tipo_cabelo,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await tipoCabelo.find({});
    return data;
  }

  async listByHairType(tipo_cabelo: string): Promise<any[]> {
    const data = await tipoCabelo.findOne({
      tipo_cabelo,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await tipoCabelo.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, tipo_cabelo: string): Promise<void> {
    await tipoCabelo.findByIdAndUpdate(
      { _id: id },
      {
        tipo_cabelo,
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
