import { CreateUsuarioUseCase } from '@modules/usuario/CreateUsuarioUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      perfilUsuario,
      setorUsuario,
      unidadeUsuario,
      nome,
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
    const create = container.resolve(CreateUsuarioUseCase);
    const result = await create.execute({
      perfilUsuario,
      setorUsuario,
      unidadeUsuario,
      nome,
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
    return response
      .status(201)
      .json({ acknowledge: true, status: 'created', content: result });
  }
}

export { CreateUsuarioController };
