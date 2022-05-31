import { ICreateUsuarioDTO } from '@modules/usuario/ICreateUsuarioDTO';
import { IUpdateUsuarioDTO } from '@modules/usuario/IUpdateUsuarioDTO';
import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { usuario } from 'model/Usuario.model';
import moment from 'moment';
import mongoose from 'mongoose';

class UsuarioRepository implements IUsuarioRepository {
  private usuario = usuario;

  async create(usuario: any): Promise<any> {

    const cadastroUsuario = await this.usuario.create(usuario);

    return cadastroUsuario;
  }

  async listByCPF(cpf: string): Promise<any[]> {
    const data = await this.usuario.findOne({
      cpf,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await this.usuario.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllUsuario(params: any) {
    let page = (params.page != null ? (params.page - 1) + '' : '0');
    let pageSize = params.pageSize != null ? params.pageSize : '10';
    let search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = { $or: [{ nome: search }, { cpf: search }, { setorUsuario: search }] };
    }

    let total = await this.usuario.countDocuments(filters);
    let pageNumber = await parseInt(page);
    let pageSizeNumber = await parseInt(pageSize);

    let data = await this.usuario.find(
      filters,
      'nome cpf perfilUsuario setorUsuario',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber });

    let result = await { 'page': params.page, 'pageSize': pageSize, 'total': total, 'data': data };

    return result;
  }

  async delete(id: string): Promise<void> {
    await usuario.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async update(data: any): Promise<void> {
    await usuario.findByIdAndUpdate(
      { _id: data.id },
      {
        updated_at: new Date()
      },
    );
  }
}

export { UsuarioRepository };
