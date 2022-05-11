import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCadastroPacienteUseCase } from './UpdateCadastroPacienteUseCase';

class UpdateCadastroPacienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pacienteid } = request.params;
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
      caracteristicas,
      raca_etnia,
      cor_olhos,
      biotipo,
      cor_cabelos,
      tipo_cabelo,
      corte_cabelo,
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
    } = request.body;
    const update = container.resolve(UpdateCadastroPacienteUseCase);
    await update.execute({
      id: pacienteid,
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
      caracteristicas,
      raca_etnia,
      cor_olhos,
      biotipo,
      cor_cabelos,
      tipo_cabelo,
      corte_cabelo,
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
    });

    return response.status(204).send();
  }
}

export { UpdateCadastroPacienteController };
