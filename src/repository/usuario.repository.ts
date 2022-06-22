import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { usuario } from 'model/Usuario.model';
import moment from 'moment';
import mongoose from 'mongoose';

class UsuarioRepository implements IUsuarioRepository {
  //private usuario = usuario;

  async create(usuarioCadastro: any): Promise<any> {
    usuarioCadastro.data_cadastro =  await moment().format('YYYY-MM-DD');
    usuarioCadastro.hora_cadastro = await moment().format('HH:mm:ss');

    const cadastroUsuario = await usuario.create(usuarioCadastro);

    return cadastroUsuario;
  }

  async listByCPF(cpf: string): Promise<any[]> {
    const data = await usuario.findOne({
      cpf
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await usuario.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllUsuario(params: any) {
    let page = (params.currentPage != null ? (params.currentPage ) + '' : '1');
    let pageSize = params.perPage != null ? params.perPage : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $or: [{ nome: search }, { cpf: search }, { setorUsuario: search }] };
    }

    let total = await usuario.countDocuments(filters);
    let pageNumber = await parseInt(page) - 1;
    let pageSizeNumber = await parseInt(pageSize);

    let data = await usuario.find(
      filters,
      ' nome cpf perfilUsuario setorUsuario status',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber });

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }

  async delete(id: string): Promise<void> {
   return await usuario.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async update( id: string, data: any): Promise<void> {
    data.updated_at= new Date();
    await usuario.findByIdAndUpdate(
      { _id: id },
      data
     ,
    );
  }
}

export { UsuarioRepository };
