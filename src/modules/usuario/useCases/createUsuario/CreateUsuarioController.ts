import { CreateUsuarioUseCase } from '@modules/usuario/useCases/createUsuario/CreateUsuarioUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      primeiro_nome,
      nome_completo,
      nome_mae,
      nome_pai,
      data_nascimento,
      sexo,
      estado_civil,
      nacionalidade,
      raca_etnia,
      cpf_usuario,
      rg_usuario,
      tipo_usuario,
      endereco_usuario_cep,
      endereco_usuario_logradouro,
      endereco_usuario_numero,
      endereco_usuario_bairro,
      setor,
      unidade_usuario,
    } = request.body;
    const create = container.resolve(CreateUsuarioUseCase);
    const result = await create.execute({
      primeiro_nome,
      nome_completo,
      nome_mae,
      nome_pai,
      data_nascimento,
      sexo,
      estado_civil,
      nacionalidade,
      raca_etnia,
      cpf_usuario,
      rg_usuario,
      tipo_usuario,
      endereco_usuario_cep,
      endereco_usuario_logradouro,
      endereco_usuario_numero,
      endereco_usuario_bairro,
      setor,
      unidade_usuario,
    });
    return response
      .status(201)
      .json({ acknowledge: true, status: 'created', content: result });
  }
}

export { CreateUsuarioController };
