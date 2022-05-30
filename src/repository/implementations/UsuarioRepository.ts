import { ICreateUsuarioDTO } from '@modules/usuario/ICreateUsuarioDTO';
import { IUpdateUsuarioDTO } from '@modules/usuario/IUpdateUsuarioDTO';
import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { usuario } from 'model/Usuario.model';
import moment from 'moment';
import mongoose from 'mongoose';

class UsuarioRepository implements IUsuarioRepository {
  async create(usuario:any): Promise<any> {
    
    const cadastroUsuario = await usuario.create(usuario);

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
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllUsuario(params:any){
    let page = params.page!=null?(params.page-1):0;
    let pageSize = params.pageSize!=null?params.pageSize:10;
    let search = params.search!=null?params.search:'';
    let filters = {};
    
    // Caso a uma palavra para busca seja enviada
    if(search){
      filters ={$or: [{nome:search},{cpf:search},{setorUsuario:search}]};
    }
  
    let total = await usuario.countDocuments(filters).countDocuments();

    let data = await usuario.find(
      filters,
      'nome cpf perfilUsuario setorUsuario',
      {skip:page, limit: pageSize});

    let result = await {'page': params.page,'pageSize': pageSize, 'total': total, 'data': data };

    return result;
  }

  async delete(id: string): Promise<void> {
    await usuario.findByIdAndRemove({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async update(data: IUpdateUsuarioDTO): Promise<void> {
    await usuario.findByIdAndUpdate(
      { _id: data.id },
      {
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
        dataNascimento: data.dataNascimento,
        nacionalidade: data.nacionalidade,
        rg: data.rg,
        cpf: data.cpf,
        cep: data.cep,
        logradouro: data.logradouro,
        numero: data.numero,
        bairro: data.bairro,
        municipio: data.municipio,
        estado: data.estado,
        updated_at: new Date(),
      },
    );
  }
}

export { UsuarioRepository };
