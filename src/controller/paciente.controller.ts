// import { Request, Response } from 'express';
import { AppError } from 'AppError';
import { Request, Response } from 'express';
import fs from 'fs';
import { Messages } from 'messages/Messages';
import path from 'path';
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
      statusPaciente,
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
      dataIdentificacao,
      meioIdentificacao,
      tipoCaracteristicas,
    } = request.body;

    const create = container.resolve(PacienteService);

    const result = await create.create({
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      statusPaciente,
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
      dataIdentificacao,
      meioIdentificacao,
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

  async listsearch(request: Request, response: Response): Promise<any> {
    const list = container.resolve(PacienteService);
    const data = await list.listsearch(request);

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
      statusPaciente,
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
      dataIdentificacao,
      meioIdentificacao,
      tipoCaracteristicas,
    } = request.body;

    const update = container.resolve(PacienteService);

    await update.update(id, {
      dataEntrada,
      horaEntrada,
      numProntuario,
      entradaAtraves,
      statusRegistro,
      statusPaciente,
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
      dataIdentificacao,
      meioIdentificacao,
      tipoCaracteristicas,
    });

    return response.status(204).send();
  }

  async uploadImagem(request: Request, response: Response): Promise<Response> {
    // if (err instanceof multer.MulterError) {
    //   // A Multer error occurred when uploading.
    //   throw new AppError(
    //     'MulterError: Conhecido 5 é quantidade máxima de Imagens',
    //   );
    // } else if (err) {
    //   throw new AppError('5 é quantidade máxima de Imagens');
    //   // An unknown error occurred when uploading.
    // }

    // Everything went fine.
    const arquivos = request.files;
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);
    const files: any[] = [];

    for (let i = 0; i < arquivos.length; i += 1) {
      files.push(`/images/${arquivos[i].filename}`);

      await importFile.uploadImage(id, files[i]);
    }

    return response.status(201).send({
      message: 'Successfully uploaded',
    });
  }

  async loadImagem(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadImage(id);

    return response.status(200).json(data);
  }

  async loadImagemById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadImageById(id);

    return response.status(200).json(data);
  }

  async deleteImagem(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const useCase = container.resolve(PacienteService);

    const imagem = await useCase.loadImageById(id);
    if (!imagem) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    const parcial = `${imagem.imagens}`;
    const raiz = path.join(__dirname, '..', '..');
    // const re = /\//gi;
    // const path_file = parcial.replace(re, '\\');

    try {
      fs.access(raiz + parcial, async err => {
        if (err) {
          return response
            .status(400)
            .send(new AppError('Arquivo não encontrado'));
        }

        fs.unlink(raiz + parcial, async err => {
          if (err) {
            return response
              .status(400)
              .send(
                new AppError(
                  'Erro do Apagar - Não foi possível remover o arquivo. Tente novamente mais tarde',
                ),
              );
          }
          await useCase.deleteImage(id);
          return response.status(204).send();
        });
      });
    } catch (error) {
      return response
        .status(400)
        .send(
          new AppError(
            'Erro do Catch - Não foi possível remover o arquivo. Tente novamente mais tarde',
          ),
        );
    }
  }

  async uploadTermo(request: Request, response: Response): Promise<Response> {
    const arquivos = request.files;
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);
    const files: any[] = [];

    for (let i = 0; i < arquivos.length; i += 1) {
      files.push(`/images/${arquivos[i].filename}`);

      await importFile.uploadTermo(id, files[i]);
    }

    return response.status(201).send({
      message: 'Successfully uploaded',
    });
  }

  async loadTermo(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadTermo(id);

    return response.status(200).json(data);
  }

  async discharged(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(PacienteService);
    const { id } = request.params;
    const paciente = request.body;

    try {
      await service.discharged(id, paciente)
      return response.status(200).send();
    } catch (error) {
      return response.status(404).send();
    }
  }
    

  async loadTermoById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadTermoById(id);

    return response.status(200).json(data);
  }

  async deleteTermo(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const useCase = container.resolve(PacienteService);

    const termo = await useCase.loadTermoById(id);
    if (!termo) {
      throw new AppError(Messages.PACIENTE_NOT_FOUND, 404);
    }

    const parcial = `${termo.termo}`;
    const raiz = path.join(__dirname, '..', '..');
    // const re = /\//gi;
    // const path_file = parcial.replace(re, '\\');

    try {
      fs.access(raiz + parcial, async err => {
        if (err) {
          return response
            .status(400)
            .send(new AppError('Termo não encontrado'));
        }

        fs.unlink(raiz + parcial, async err => {
          if (err) {
            return response
              .status(400)
              .send(
                new AppError(
                  'Não foi possível remover o Termo. Tente novamente mais tarde',
                ),
              );
          }
          await useCase.deleteTermo(id);
          return response.status(204).send();
        });
      });
    } catch (error) {
      return response
        .status(400)
        .send(
          new AppError(
            'Não foi possível remover o arquivo. Tente novamente mais tarde',
          ),
        );
    }
  }
}

export { PacienteController };
