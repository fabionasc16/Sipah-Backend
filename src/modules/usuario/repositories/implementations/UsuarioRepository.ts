import { ICreateUsuarioDTO } from '@modules/usuario/dtos/ICreateUsuarioDTO';
import { usuario } from '@modules/usuario/models/Usuario.model';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import moment from 'moment';

class UsuarioRepository implements IUsuarioRepository {
  async create(data: ICreateUsuarioDTO): Promise<any> {
    const cadastroUsuario = await usuario.create({
      data_cadastro: moment().format('YYYY-MM-DD'),
      hora_cadastro: moment().format('hh:mm:ss'),
      primeiro_nome: data.primeiro_nome,
      nome_completo: data.nome_completo,
      nome_mae: data.nome_mae,
      nome_pai: data.nome_pai,
      data_nascimento: new Date(data.data_nascimento)
        .toISOString()
        .substring(0, 10),
      sexo: data.sexo,
      estado_civil: data.estado_civil,
      nacionalidade: data.nacionalidade,
      raca_etnia: data.raca_etnia,
      cpf_usuario: data.cpf_usuario,
      rg_usuario: data.rg_usuario,
      tipo_usuario: data.tipo_usuario,
      endereco_usuario_cep: data.endereco_usuario_cep,
      endereco_usuario_logradouro: data.endereco_usuario_logradouro,
      endereco_usuario_numero: data.endereco_usuario_numero,
      endereco_usuario_bairro: data.endereco_usuario_bairro,
      setor: data.setor,
      unidade_usuario: data.unidade_usuario,
    });

    return cadastroUsuario;
  }

  async listByCPF(cpf_usuario: string): Promise<any[]> {
    const data = await usuario.findOne({
      cpf_usuario,
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
