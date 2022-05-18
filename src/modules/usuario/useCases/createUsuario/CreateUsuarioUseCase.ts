import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

interface IRequest {
  primeiro_nome: string;
  nome_completo: string;
  nome_mae: string;
  nome_pai: string;
  data_nascimento: string;
  sexo: string;
  estado_civil: string;
  nacionalidade: string;
  raca_etnia: string;
  cpf_usuario: string;
  rg_usuario: string;
  tipo_usuario: string;
  endereco_usuario_cep: string;
  endereco_usuario_logradouro: string;
  endereco_usuario_numero: string;
  endereco_usuario_bairro: string;
  setor: string;
  unidade_usuario: string;
}

@injectable()
class CreateUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(data: IRequest): Promise<any> {
    const existCPF = await this.usuarioRepository.listByCPF(data.cpf_usuario);
    if (existCPF) {
      throw new AppError(Messages.USUARIO_ALREADY_EXISTS, 400);
    }

    const cadastroUsuario = await this.usuarioRepository.create({
      primeiro_nome: data.primeiro_nome,
      nome_completo: data.nome_completo,
      nome_mae: data.nome_mae,
      nome_pai: data.nome_pai,
      data_nascimento: data.data_nascimento,
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
}

export { CreateUsuarioUseCase };
