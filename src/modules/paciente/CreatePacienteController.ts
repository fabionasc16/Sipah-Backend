import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePacienteUseCase } from './CreatePacienteUseCase';

class CreatePacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      hora_entrada,
      tipo_entrada,
      nome_paciente,
      nome_mae,
      data_nascimento,
      rg_paciente,
      cpf_paciente,
      cns_paciente,
      nacionalidade,
      sexo,
      estatura_aproximada,
      peso_aproximado,
      idade_aproximada,
      tem_barba,
      tem_bigode,
      sinais_particulares,
      acessorios_utilizados,
      deficiencias,
      vestimentas,
      local_encontrado,
      bairro,
      condicoes_encontrado,
      caracteristicas,
    } = request.body;
    const create = container.resolve(CreatePacienteUseCase);
    const result = await create.execute({
      hora_entrada,
      tipo_entrada,
      nome_paciente,
      nome_mae,
      data_nascimento,
      rg_paciente,
      cpf_paciente,
      cns_paciente,
      nacionalidade,
      sexo,
      estatura_aproximada,
      peso_aproximado,
      idade_aproximada,
      tem_barba,
      tem_bigode,
      sinais_particulares,
      acessorios_utilizados,
      deficiencias,
      vestimentas,
      local_encontrado,
      bairro,
      condicoes_encontrado,
      caracteristicas,
    });
    return response
      .status(201)
      .json({ acknowledge: true, status: 'created', content: result });
  }
}

export { CreatePacienteController };
