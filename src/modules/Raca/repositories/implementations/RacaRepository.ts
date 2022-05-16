import { raca } from '@modules/Raca/models/Raca';
import { IRacaRepository } from '../IRacaRepository';
import mongoose from 'mongoose';

class RacaRepository implements IRacaRepository {
  async create(raca_etnia: string): Promise<any> {
    const result = await raca.create({
      raca_etnia,
    });
    return result;
  }

  async list(): Promise<any[]> {
    const data = await raca.find({});
    return data;
  }

  async listByHairColor(raca_etnia: string): Promise<any[]> {
    const data = await raca.findOne({
      raca_etnia,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await raca.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async update(id: string, raca_etnia: string): Promise<void> {
    await raca.findByIdAndUpdate(
      { _id: id },
      {
        raca_etnia,
        updated_at: new Date(),
      },
    );
  }

  async delete(id: string): Promise<void> {
    await raca.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export { RacaRepository };
