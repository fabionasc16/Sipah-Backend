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
    const params = {
      user_cpf: cpf,
    };

    const result = await axios.get(this.urlUsuario, { params });
    return result.data;
    // const data = await Usuario.findOne({
    //   cpf,
    // }).populate('unidadeUsuario');
    // return data;
  }

  async listById(id: string): Promise<any> {
    const params = {
      _id: new mongoose.Schema.Types.ObjectId(id),
    };

    const result = await axios.get(this.urlUsuario, { params });
    return result.data;
    // const data = await Usuario.findById({
    //   _id: new mongoose.Types.ObjectId(id),
    // }).populate('unidadeUsuario');

    // return data;
  }

  async listAllUsuario(paramsIn: any) {
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
    const result = await axios.put(this.urlUsuario + id, {
      status: 'true',
    });
    // return await Usuario.findByIdAndUpdate({ _id: id }, { excluido: true });
  }

  async update(id: string, data: any): Promise<void> {
    await axios.put(this.urlUsuario + id, data);
    // data.updated_at = new Date();
    // await Usuario.findByIdAndUpdate({ _id: id }, data);
  }

  async mudarStatus(id: string): Promise<void> {
    const result = await axios.put(this.urlUsuario + id, {
      status: 'true',
    });
    // const usuarioEncontrado = await Usuario.findById({ _id: id });
    // const status = !usuarioEncontrado.status;
    // await Usuario.findByIdAndUpdate({ _id: id }, { status });
    // return await Usuario.findById({ _id: id });
  }
}

export { UsuarioRepository };
