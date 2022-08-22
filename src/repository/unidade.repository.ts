import axios from 'axios';
import { Unidade } from 'model/Unidade.model';
import mongoose from 'mongoose';

import { IUnidadeRepository } from './IUnidadeRepository';

class UnidadeRepository implements IUnidadeRepository {
  async create(data: any): Promise<any> {
    const result = await Unidade.create(data);

    return result;
  }

  async list(params: any): Promise<any> {
    const result = await axios.get(
      'https:/192.168.107.62:3333/api/v1/unities',
      {
        params,
      },
    );
    return result;
    // const page =
    //   params.query.currentPage != null ? `${params.query.currentPage}` : '1';
    // const pageSize = params.query.perPage != null ? params.query.perPage : '10';
    // const total = await Unidade.countDocuments(params.body);
    // const pageNumber = parseInt(page, 10) - 1;
    // const pageSizeNumber = parseInt(pageSize, 10);
    // const data = await Unidade.find(params.body, 'nome status', {
    //   skip: pageNumber * pageSizeNumber,
    //   limit: pageSizeNumber,
    // });
    // const result = { currentPage: page, perPage: pageSize, total, data };
    // return result;
  }

  async listById(id: string): Promise<any> {
    const result = await Unidade.findById({
      _id: new mongoose.Types.ObjectId(id),
    });

    return result;
  }

  async delete(id: string): Promise<void> {
    await Unidade.findByIdAndDelete(id);
  }

  async update(id: string, data: any): Promise<void> {
    await Unidade.findByIdAndUpdate(id, data);
  }
}

export { UnidadeRepository };
