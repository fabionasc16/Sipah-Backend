import axios from 'axios';
import { Unidade } from 'model/Unidade.model';
import mongoose from 'mongoose';

import { IUnidadeRepository } from './IUnidadeRepository';

class UnidadeRepository implements IUnidadeRepository {
  private urlUnidade = 'http://192.168.107.62:3333/api/v1/unities/';

  async create(data: any): Promise<any> {
    const created = await axios.post(this.urlUnidade, data);
    return created;
  }

  async list(paramsIn: any): Promise<any> {
    const page =
      paramsIn.query.currentPage != null
        ? `${paramsIn.query.currentPage}`
        : '1';
    const pageSize =
      paramsIn.query.perPage != null ? paramsIn.query.perPage : '10';

    const params = {
      perPage: pageSize,
      currentPage: page,
    };

    const result = await axios.get(this.urlUnidade, { params });
    return result.data;
  }

  async listById(id: string): Promise<any> {
    const params = {
      _id: new mongoose.Schema.Types.ObjectId(id),
    };

    const result = await axios.get(this.urlUnidade, { params });
    return result.data;
  }

  async delete(id: string): Promise<void> {
    const result = await axios.put(this.urlUnidade + id, {
      status: 'true',
    });
  }

  async update(id: string, data: any): Promise<void> {
    await axios.put(this.urlUnidade + id, data);
  }
}

export { UnidadeRepository };
