import axios from 'axios';
import { IUnidadeRepository } from './IUnidadeRepository';

class UnidadeRepository implements IUnidadeRepository {
  private urlUnidade = 'http://192.168.107.62:3333/api/v1/unities/';

  async create(data: any): Promise<any> {
    const created = await axios.post(this.urlUnidade, data);
    return created.data;
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
    const result = await axios.get(`${this.urlUnidade}id/${id}`);
    return result.data;
  }

  async listByCNPJ(cnpj: string): Promise<any> {
    const result = await axios.get(`${this.urlUnidade}/cnpj/${cnpj}`);
    return result.data;
  }

  async delete(id: string): Promise<void> {
    const result = await axios.delete(`${this.urlUnidade}${id}`);
  }

  async update(id: string, data: any): Promise<void> {
    await axios.put(`${this.urlUnidade}${id}`, data);
  }
}

export { UnidadeRepository };
