// import { Request, Response } from 'express';
import { AppError } from 'AppError';
import { Request, Response } from 'express';
import fs from 'fs';
import { Messages } from 'messages/Messages';
import { Paciente } from 'model/Paciente.model';
import moment from 'moment';
import path from 'path';
import { container } from 'tsyringe';

import { PacienteService } from '../service/paciente.service';

class PacienteController {
  async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(PacienteService);
    const paciente = request.body;

    try {
      const result = await service.create(paciente);
      return response
        .status(201)
        .json({ acknowledge: true, status: 'created', content: result });
    } catch (error) {
      if (error.message !== null) {
        if (error.code === 11000) {
          return response.status(400).send({
            message: 'Número de prontuário já cadastrado',
          });
        }
      }
      return response.status(400).send({
        message: 'Não foi possível cadastrar o usuário',
        // message: error,
      });
    }
  }

  async listsearch(request: Request, response: Response): Promise<any> {
    const list = container.resolve(PacienteService);
    const data = await list.listsearch(request);

    return response.status(200).json(data);
  }

  async listSearchOut(request: Request, response: Response): Promise<any> {
    const list = container.resolve(PacienteService);
    const data = await list.listSearchOut(request);

    return response.status(200).json(data);
  }

  async listById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const pacient = container.resolve(PacienteService);
    const data = await pacient.listById(id);

    return response.status(200).json(data);
  }

  async listByExternalId(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { externalId } = request.params;
    const pacient = container.resolve(PacienteService);
    const data = await pacient.listByExternalId(externalId);

    return response.status(200).json(data);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const useCase = container.resolve(PacienteService);

    await useCase.delete(id);
    return response.status(204).send();
  }

  async uploadImagem(request: Request, response: Response): Promise<Response> {
    try {
      if (Object.keys(request.files).length !== 0) {
        const { arquivos } = request.files;
        const { id } = request.params;
        const importFile = container.resolve(PacienteService);
        const files: any[] = [];

        for (let i = 0; i < arquivos.length; i += 1) {
          files.push(`/images/${arquivos[i].filename}`);

          const img = await importFile.uploadImage(id, files[i]);
          if (i === 0) {
            const pacienteConsulta = await importFile.listById(
              `${img.paciente}`,
            );
            if (
              // pacienteConsulta.autorizaConsulta === 'Sim' &&
              !pacienteConsulta.imgPrincipal
            ) {
              try {
                const texto = `{"imgPrincipal":"${img._id}` + `"}`;
                const paciente = JSON.parse(texto);
                const result = await importFile.update(id, paciente);
              } catch (error) {
                return response.status(404).send(error.message);
              }
            }
          }
        }

        return response.status(201).send({
          message: 'Successfully uploaded',
        });
      }
      // return response.status(400).send({
      //   message: 'Arquivo de Imagem não selecionado para upload',
      // });
    } catch (error) {
      return response
        .status(400)
        .send({ message: 'Arquivo de Imagem não selecionado para upload' });
    }
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

  async loadImageByIdOpen(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadImageByIdOpen(id);

    const raiz = path.join(__dirname, '..', '..');
    return response.sendFile(raiz + data.imagens);
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
          // Atualizar a imgPrincipal do Paciente se a Imagem for a primeira (a próxima mais antiga)
          // 1 - Verificar se há outra imagem para atualizar em imgPrincipal
          // 2 - Atualizar imgPrincipal
          const idPaciente = `${imagem.paciente}`;
          const existImg = await useCase.loadImage(idPaciente);

          if (existImg.length > 0) {
            await useCase.update(idPaciente, {
              imgPrincipal: existImg[0]._id,
            });
          } else {
            await useCase.update(idPaciente, {
              imgPrincipal: null,
            });
          }

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

  async uploadTermo(request: Request, response: Response): Promise<Response> {
    try {
      if (Object.keys(request.files).length !== 0) {
        const { termo } = request.files;
        const { id } = request.params;
        const importFile = container.resolve(PacienteService);
        const files: any[] = [];

        for (let i = 0; i < termo.length; i += 1) {
          files.push(`/images/${termo[i].filename}`);

          await importFile.uploadTermo(id, files[i]);
        }

        return response.status(201).send({
          message: 'Successfully uploaded',
        });
      }
      return response
        .status(400)
        .send({ message: 'Arquivo de Termo não selecionado para upload' });
    } catch (error) {
      return response
        .status(400)
        .send({ message: 'Arquivo de Termo não selecionado para upload' });
    }
  }

  async loadTermo(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const importFile = container.resolve(PacienteService);

    const data = await importFile.loadTermo(id);

    return response.status(200).json(data);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(PacienteService);
    const { id } = request.params;
    const paciente = request.body;

    try {
      await service.update(id, paciente);
      return response
        .status(200)
        .json({ acknowledge: true, status: 'updated' });
    } catch (error) {
      return response.status(404).send(error.message);
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
      // return response
      //   .status(400)
      //   .send(
      //     new AppError(
      //       'Não foi possível remover o arquivo. Tente novamente mais tarde',
      //     ),
      //   );
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

  async pacientTransfer(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const service = container.resolve(PacienteService);
    const paciente = request.body;
    const { id } = request.params;

    try {
      // 1 - verificar se paciente a ser transferido exist
      const origin = await service.listByIdTransfer(id);
      if (!origin) {
        return response.status(400).send({
          message: 'Usuário a ser transferido não existe',
        });
      }

      // 2 - duplico registro do paciente, no entanto, em outra unidade de sáude
      const dt = await moment().format('YYYY-MM-DD HH:mm:ss');
      // console.log(dt);
      origin.dataEntrada = dt.substring(0, 10);
      // console.log(origin.dataEntrada);
      origin.horaEntrada = dt.substring(11);
      // console.log(origin.horaEntrada);

      const aux = origin.unidade;

      console.log(paciente.unidadeSaudeDestino);
      origin.unidade = paciente.unidadeSaudeDestino;
      origin.unidadeSaudeOrigem = aux;
      origin.unidadeSaudeDestino = null;
      origin.numProntuario = '012';

      const oringinJSON = JSON.stringify(origin);
      const dados = JSON.parse(oringinJSON);

      // return response.status(201).send(console.log(oringinJSON));
      // 3 - Criar novo registro do paciente em outra unidade
      const created = await service.create(dados);

      // console.log(created);
      // 4 - Atualizo o status e unidade de destino do registro da unidade de origem
      const up = await service.update(id, {
        statusRegistro: 'Finalizado',
        unidadeSaudeDestino: paciente.unidadeSaudeDestino,
        dataSaida: dados.dataEntrada,
        horaSaida: dados.horaEntrada,
      });

      return response
        .status(201)
        .json({ acknowledge: true, status: 'transferred' });
    } catch (error) {
      if (error.message !== null) {
        if (error.code === 11000) {
          return response.status(400).send({
            message: 'Número de prontuário já cadastrado',
          });
        }
      }
      return response.status(400).send({
        message: 'Não foi possível transferir o usuário',
      });
    }
  }
}

export { PacienteController };
