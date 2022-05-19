import { ICreateUsuarioDTO } from '@modules/usuario/dtos/ICreateUsuarioDTO';
import { usuario } from '@modules/usuario/models/Usuario.model';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import moment from 'moment';

class UsuarioRepository implements IUsuarioRepository {
  async create(data: ICreateUsuarioDTO): Promise<any> {
    const cadastroUsuario = await usuario.create({
      data_cadastro: moment().format('YYYY-MM-DD'),
      hora_cadastro: moment().format('HH:mm:ss'),
      perfilUsuario: data.perfilUsuario,
      setorUsuario: data.setorUsuario,
      unidadeUsuario: data.unidadeUsuario,
      priNome: data.priNome,
      sobreNome: data.sobreNome,
      nomeMae: data.nomeMae,
      nomePai: data.nomePai,
      sexo: data.sexo,
      estadoCivil: data.estadoCivil,
      raca: data.raca,
      dataNascimento: new Date(data.dataNascimento)
        .toISOString()
        .substring(0, 10),
      nacionalidade: data.nacionalidade,
      rg: data.rg,
      cpf: data.cpf,
      cep: data.cep,
      logradouro: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      municipio: data.municipio,
      estado: data.estado,
    });

    return cadastroUsuario;
  }

  async listByCPF(cpf: string): Promise<any[]> {
    const data = await usuario.findOne({
      cpf,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await usuario.findById({
      id,
    });
    return data;
  }

  async listAllUsuario(): Promise<any[]> {
    const data = await usuario.find({});
    return data;
  }
}

export { UsuarioRepository };
