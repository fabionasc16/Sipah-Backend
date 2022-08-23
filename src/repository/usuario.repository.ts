import axios from 'axios';
import { Usuario } from 'model/Usuario.model';
import moment from 'moment';
import mongoose from 'mongoose';
import { IUsuarioRepository } from 'repository/IUsuarioRepository';

class UsuarioRepository implements IUsuarioRepository {
  private urlUsuario = 'http://192.168.107.62:3333/api/v1/users/';

  async create(usuarioCadastro: any): Promise<any> {
    const created = await axios.post(this.urlUsuario, usuarioCadastro);
    return created;
    // usuarioCadastro.data_cadastro = await moment().format('YYYY-MM-DD');
    // usuarioCadastro.hora_cadastro = await moment().format('HH:mm:ss');
    // usuarioCadastro.cpfSemFormatacao = usuarioCadastro.cpf
    //   .replaceAll('.', '')
    //   .replaceAll('-', '');
    // const cadastroUsuario = await Usuario.create(usuarioCadastro);
    // return cadastroUsuario;
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

    const result = await axios.get(this.urlUsuario, { params });
    return result.data;
    // const page = params.currentPage != null ? `${params.currentPage}` : '1';
    // const pageSize = params.perPage != null ? params.perPage : '10';
    // const search = params.search != null ? params.search : '';
    // const filters = { $and: [] };
    // filters?.$and.push({ excluido: false });
    // // Caso a uma palavra para busca seja enviada
    // if (search) {
    //   filters?.$and.push({
    //     $or: [
    //       { cpf: search },
    //       { cpfSemFormatacao: search },
    //       { setorUsuario: search },
    //       { nome: { $regex: new RegExp(search, 'i') } },
    //     ],
    //   });
    // }
    // const total = await Usuario.countDocuments(filters);
    // const pageNumber = (await parseInt(page)) - 1;
    // const pageSizeNumber = await parseInt(pageSize);
    // const data = await Usuario.find(
    //   filters,
    //   ' nome cpf perfilUsuario setorUsuario status',
    //   {
    //     skip: pageNumber * pageSizeNumber,
    //     limit: pageSizeNumber,
    //     sort: { status: -1, nome: 1 },
    //   },
    // );
    // const result = await {
    //   currentPage: page,
    //   perPage: pageSize,
    //   total,
    //   data,
    // };
    // return result;
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
    // const usuarioEncontrado = await Usuario.findById({ _id: id });
    // const status = !usuarioEncontrado.status;
    // await Usuario.findByIdAndUpdate({ _id: id }, { status });
    // return await Usuario.findById({ _id: id });
  }
}

export { UsuarioRepository };
