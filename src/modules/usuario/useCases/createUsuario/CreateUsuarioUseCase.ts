import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

interface IRequest {
  perfilUsuario: string;
  setorUsuario: string;
  unidadeUsuario: string;
  priNome: string;
  sobreNome: string;
  nomeMae: string;
  nomePai: string;
  sexo: string;
  estadoCivil: string;
  raca: string;
  dataNascimento: string;
  nacionalidade: string;
  rg: string;
  cpf: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  estado: string;
}

@injectable()
class CreateUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(data: IRequest): Promise<any> {
    const existCPF = await this.usuarioRepository.listByCPF(data.cpf);
    if (existCPF) {
      throw new AppError(Messages.USUARIO_ALREADY_EXISTS, 400);
    }

    const cadastroUsuario = await this.usuarioRepository.create({
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
}

export { CreateUsuarioUseCase };
