import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUsuarioUseCase } from './UpdateUsuarioUseCase';

class UpdateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      perfilUsuario,
      setorUsuario,
      unidadeUsuario,
      priNome,
      sobreNome,
      nomeMae,
      nomePai,
      sexo,
      estadoCivil,
      raca,
      dataNascimento,
      nacionalidade,
      rg,
      cpf,
      cep,
      logradouro,
      numero,
      bairro,
      municipio,
      estado,
    } = request.body;

    const updateUsuarioUseCase = container.resolve(UpdateUsuarioUseCase);
    await updateUsuarioUseCase.execute({
      id,
      perfilUsuario,
      setorUsuario,
      unidadeUsuario,
      priNome,
      sobreNome,
      nomeMae,
      nomePai,
      sexo,
      estadoCivil,
      raca,
      dataNascimento,
      nacionalidade,
      rg,
      cpf,
      cep,
      logradouro,
      numero,
      bairro,
      municipio,
      estado,
    });

    return response.status(204).send();
  }
}

export { UpdateUsuarioController };
