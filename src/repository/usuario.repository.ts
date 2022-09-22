import axios from 'axios';
import { IUsuarioRepository } from '../repository/IUsuarioRepository';

class UsuarioRepository implements IUsuarioRepository {
  private urlUsuario = 'http://192.168.107.62:3333/api/v1/users/';

  async create(usuarioCadastro: any): Promise<any> {
    const created = await axios.post(this.urlUsuario, usuarioCadastro);
    return created.data;
  }

  async listByCPF(cpf: string): Promise<any[]> {
    const result = await axios.get(`${this.urlUsuario}cpf/${cpf}`);
    return result.data;
  }

  async listById(id: string): Promise<any> {
    const result = await axios.get(`${this.urlUsuario}id/${id}`);
    return result.data;
  }

  async listAllUsuario(paramsIn: any): Promise<any> {
    const page = paramsIn.currentPage != null ? `${paramsIn.currentPage}` : '1';
    const pageSize = paramsIn.perPage != null ? paramsIn.perPage : '10';

    const params = {
      perPage: pageSize,
      currentPage: page,
    };

    const result = await axios.get(`${this.urlUsuario}`, {
      params,
    });

    return result.data;
  }

  async listAllUsuarioByUnit(idunidade: any): Promise<any> {
    const result = await axios.get(`${this.urlUsuario}unity/${idunidade}`);
    return result.data;
  }

  async delete(id: string): Promise<void> {
    const result = await axios.delete(`${this.urlUsuario}${id}`);
  }

  async update(id: string, data: any): Promise<void> {
    await axios.put(`${this.urlUsuario}${id}`, data);
  }

  async mudarStatus(id: string): Promise<void> {
    const result = await axios.put(`${this.urlUsuario}${id}`, {
      status: 'true',
    });
  }
}

export { UsuarioRepository };
