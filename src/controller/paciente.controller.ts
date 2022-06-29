import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PacienteService } from '../service/paciente.service';

class PacienteController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      nomePaciente,
      nomeMae,
      dataNascimento,
      rg,
      cpf,
      cns,
      nacionalidade,
      pais,
      estaturaAproximada,
      pesoAproximado,
      idadeAproximada,
      condicoesEncontrada,
      localEncontrado,
      sinaisParticulares,
      acessoriosUtilizados,
      vestimentas,
      barba,
      bigode,
      bairroEncontrado,
      deficiencia,
      naoInformaContato,
      nomeContato,
      grauParentescoSelected,
      telefoneContato,
      cpfContato,
      genero,
      generoOutro,
      unidade,
      nomeSocialPaciente,
      apelidoPaciente,
      vitimaAbandono,
      querEncontro,
      autorizaConsulta,
      numRegistroExterno,
      unidadeSaudeOrigem,
      conscienciaPaciente,
      transtornosPaciente,
      tratamentoPsicologico,
      descricaoEstadoPaciente,
      tipoCaracteristicas,
    } = request.body;

    const create = container.resolve(PacienteService);

    const result = await create.create({
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      nomePaciente,
      nomeMae,
      dataNascimento,
      rg,
      cpf,
      cns,
      nacionalidade,
      pais,
      estaturaAproximada,
      pesoAproximado,
      idadeAproximada,
      condicoesEncontrada,
      localEncontrado,
      sinaisParticulares,
      acessoriosUtilizados,
      vestimentas,
      barba,
      bigode,
      bairroEncontrado,
      deficiencia,
      naoInformaContato,
      nomeContato,
      grauParentescoSelected,
      telefoneContato,
      cpfContato,
      genero,
      generoOutro,
      unidade,
      nomeSocialPaciente,
      apelidoPaciente,
      vitimaAbandono,
      querEncontro,
      autorizaConsulta,
      numRegistroExterno,
      unidadeSaudeOrigem,
      conscienciaPaciente,
      transtornosPaciente,
      tratamentoPsicologico,
      descricaoEstadoPaciente,
      tipoCaracteristicas,
    });
    return response
      .status(201)
      .json({ acknowledge: true, status: 'created', content: result });
  }

  async list(request: Request, response: Response): Promise<any> {
    const list = container.resolve(PacienteService);
    const data = await list.list(request.query);

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
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      nomePaciente,
      nomeMae,
      dataNascimento,
      rg,
      cpf,
      cns,
      nacionalidade,
      pais,
      estaturaAproximada,
      pesoAproximado,
      idadeAproximada,
      condicoesEncontrada,
      localEncontrado,
      sinaisParticulares,
      acessoriosUtilizados,
      vestimentas,
      barba,
      bigode,
      bairroEncontrado,
      deficiencia,
      naoInformaContato,
      nomeContato,
      grauParentescoSelected,
      telefoneContato,
      cpfContato,
      genero,
      generoOutro,
      unidade,
      nomeSocialPaciente,
      apelidoPaciente,
      vitimaAbandono,
      querEncontro,
      autorizaConsulta,
      numRegistroExterno,
      unidadeSaudeOrigem,
      conscienciaPaciente,
      transtornosPaciente,
      tratamentoPsicologico,
      descricaoEstadoPaciente,
      tipoCaracteristicas,
    } = request.body;

    const update = container.resolve(PacienteService);

    await update.update(id, {
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      nomePaciente,
      nomeMae,
      dataNascimento,
      rg,
      cpf,
      cns,
      nacionalidade,
      pais,
      estaturaAproximada,
      pesoAproximado,
      idadeAproximada,
      condicoesEncontrada,
      localEncontrado,
      sinaisParticulares,
      acessoriosUtilizados,
      vestimentas,
      barba,
      bigode,
      bairroEncontrado,
      deficiencia,
      naoInformaContato,
      nomeContato,
      grauParentescoSelected,
      telefoneContato,
      cpfContato,
      genero,
      generoOutro,
      unidade,
      nomeSocialPaciente,
      apelidoPaciente,
      vitimaAbandono,
      querEncontro,
      autorizaConsulta,
      numRegistroExterno,
      unidadeSaudeOrigem,
      conscienciaPaciente,
      transtornosPaciente,
      tratamentoPsicologico,
      descricaoEstadoPaciente,
      tipoCaracteristicas,
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
