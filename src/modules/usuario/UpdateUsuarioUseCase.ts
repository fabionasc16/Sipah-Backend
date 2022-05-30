import { IUsuarioRepository } from 'repository/IUsuarioRepository';
import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
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
class UpdateUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(data: IRequest): Promise<any> {
    if (!data.id) {
      throw new AppError('Provide an User ID to update data');
    }

    const usuario = await this.usuarioRepository.listById(data.id);
    if (!usuario) {
      throw new AppError(Messages.NO_USUARIO_REGISTERED, 404);
    }

    if (data.perfilUsuario) {
      usuario.perfilUsuario = data.perfilUsuario;
    }

    if (data.setorUsuario) {
      usuario.setorUsuario = data.setorUsuario;
    }

    if (data.unidadeUsuario) {
      usuario.unidadeUsuario = data.unidadeUsuario;
    }

    if (data.priNome) {
      usuario.priNome = data.priNome;
    }

    if (data.sobreNome) {
      usuario.sobreNome = data.sobreNome;
    }

    if (data.nomeMae) {
      usuario.nomeMae = data.nomeMae;
    }

    if (data.nomePai) {
      usuario.nomePai = data.nomePai;
    }

    if (data.sexo) {
      usuario.sexo = data.sexo;
    }

    if (data.estadoCivil) {
      usuario.estadoCivil = data.estadoCivil;
    }

    if (data.raca) {
      usuario.raca = data.raca;
    }

    if (data.dataNascimento) {
      usuario.dataNascimento = data.dataNascimento;
    }

    if (data.nacionalidade) {
      usuario.nacionalidade = data.nacionalidade;
    }

    if (data.rg) {
      usuario.rg = data.rg;
    }

    if (data.cpf) {
      const existCPF = await this.usuarioRepository.listByCPF(data.cpf);
      if (existCPF) {
        throw new AppError(Messages.USUARIO_ALREADY_EXISTS);
      } else {
        usuario.cpf = data.cpf;
      }
    }

    if (data.cep) {
      usuario.cep = data.cep;
    }

    if (data.logradouro) {
      usuario.logradouro = data.logradouro;
    }

    if (data.numero) {
      usuario.numero = data.numero;
    }

    if (data.bairro) {
      usuario.bairro = data.bairro;
    }

    if (data.municipio) {
      usuario.municipio = data.municipio;
    }

    if (data.estado) {
      usuario.estado = data.estado;
    }

    await this.usuarioRepository.update(usuario);
  }
}

export { UpdateUsuarioUseCase };
