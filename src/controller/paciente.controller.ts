import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PacienteService } from '../service/paciente.service';

class PacienteController {
  async create(request: Request, response: Response): Promise<Response> {
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
      tipos_caracteristicas,
    } = request.body;

    const create = container.resolve(PacienteService);

    const result = await create.create({
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
      tipos_caracteristicas,
    });
    return response
      .status(201)
      .json({ acknowledge: true, status: 'created', content: result });
  }

  async list(request: Request, response: Response): Promise<Response> {
    const list = container.resolve(PacienteService);
    const data = await list.list();

    return response.status(200).json(data);
  }

  async listById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const pacient = container.resolve(PacienteService);
    const data = await pacient.listById(id);

    return response.status(200).json(data);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const useCase = container.resolve(PacienteService);

    await useCase.delete(id);
    return response.status(204).send();
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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
      tipos_caracteristicas,
    } = request.body;

    const update = container.resolve(PacienteService);

    await update.update(id, {
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
      tipos_caracteristicas,
    });

    return response.status(204).send();
  }

  async uploadImagem(request: Request, response: Response): Promise<Response> {
    const arquivos = request;
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const filename = `${id}-${arquivos.file.originalname}`;
    await importFile.uploadImage(id, filename);

    return response.status(201).send({
      message: 'Successfully uploaded',
    });
  }
}

export { PacienteController };
