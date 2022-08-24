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

  async listAllUsuario(paramsIn: any, idunidade: any): Promise<any> {
    const page = paramsIn.currentPage != null ? `${paramsIn.currentPage}` : '1';
    const pageSize = paramsIn.perPage != null ? paramsIn.perPage : '10';

    let params;
    params = {
      perPage: pageSize,
      currentPage: page,
    };

    if (idunidade !== '') {
      params = {
        perPage: pageSize,
        currentPage: page,
        unit_id: idunidade,
      };
    }

    const result = await axios.get(this.urlUsuario, {
      params,
    });
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
    // const usuarioEncontrado = await Usuario.findById({ _id: id });
    // const status = !usuarioEncontrado.status;
    // await Usuario.findByIdAndUpdate({ _id: id }, { status });
    // return await Usuario.findById({ _id: id });
  }
}

export { UsuarioRepository };
