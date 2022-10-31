// import { Request, Response } from 'express';
import { Request, Response } from 'express';
import fs from 'fs';
import moment, { now } from 'moment';
import mongoose from 'mongoose';
import path from 'path';
import { container } from 'tsyringe';

import { AppError } from '../AppError';
import { Messages } from '../messages/Messages';
import { AuthService } from '../service/auth.service';
import { PacienteService } from '../service/paciente.service';

class PacienteController {
  async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(PacienteService);
    const paciente = request.body;

    try {
      // Validar data de entrada
      if (request.body.dataEntrada !== '--') {
        const dateSearch = moment(
          request.body.dataEntrada,
          'YYYY-MM-DD',
          true,
        ).utc();
        const today = moment().utc().format('YYYY-MM-DD');
        if (
          dateSearch.isValid() === false ||
          moment(request.body.dataEntrada).isAfter(today)
        ) {
          return response.status(404).send({
            message: 'Data Inválida!',
          });
        }
      }

      const result = await service.create(paciente);
      return response
        .status(201)
        .json({ acknowledge: true, status: 'created', content: result });
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível cadastrar o usuário',
      });
    }
  }

  async listsearch(request: Request, response: Response): Promise<any> {
    const list = container.resolve(PacienteService);
    let data = {};

    try {
      if (Object.keys(request.body).length !== 0) {
        if (request.body.dataEntrada !== '--') {
          const dateSearch = moment(
            request.body.dataEntrada,
            'YYYY-MM-DD',
            true,
          ).utc();
          const today = moment().utc().format('YYYY-MM-DD');
          if (
            dateSearch.isValid() === false ||
            moment(request.body.dataEntrada).isAfter(today)
          ) {
            return response.status(404).send({
              message: 'Data Inválida!',
            });
          }
        }
      }

      if (
        AuthService.checkRoles(AuthService.ROLES.ADMIN, request.user.roles) ||
        AuthService.checkRoles(AuthService.ROLES.PACIENTE, request.user.roles)
      ) {
        data = await list.listsearch(request);
      } else if (
        AuthService.checkRoles(
          AuthService.ROLES.ATENDIMENTO,
          request.user.roles,
        )
      ) {
        // TODO: Implementar metodo para listagem para recepcao
        data = await list.listsearch(request);
      }

      return response.status(200).json(data);
    } catch (error) {
      return response
        .status(error.status)
        .send('Não foi possível listar pacientes!');
    }
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
      // 1 - verificar se paciente a ser transferido existe
      let origin;
      // eslint-disable-next-line prefer-const
      origin = await service.listByIdTransfer(id);
      if (!origin) {
        return response.status(400).send({
          message: 'Usuário a ser transferido não existe',
        });
      }
      // console.log('Paciente Duplicado');
      // console.log(origin);
      // console.log('ID de Origem');
      // console.log(origin._id.toString());
      const idUsuarioUnidadeOrigem = origin._id.toString();
      origin._id = new mongoose.Types.ObjectId();
      origin.isNew = true; // digo que será uma novo registro ao mongo
      // external ID
      const firstPart = (Math.random() * 46656) | 0;
      const secondPart = (Math.random() * 46656) | 0;
      const first = `000${firstPart.toString(36)}`.slice(-3);
      const second = `000${secondPart.toString(36)}`.slice(-3);
      origin.externalId = first + second;
      console.log('Novo ID Externo');
      console.log(origin.externalId);
      // console.log('ID de Destino');
      // console.log(origin._id.toString());
      // const duplicado = await origin.save();

      // 2 - duplico registro do paciente, no entanto, em outra unidade de sáude
      // const dt = await moment().format('YYYY-MM-DD HH:mm:ss');
      // origin.dataEntrada = dt.substring(0, 10);
      // origin.horaEntrada = dt.substring(11);
      const dtIn = await moment(paciente.dataEntrada).format('YYYY-MM-DD');
      const hrIn = await moment(paciente.horaEntrada).format('HH:mm:ss');

      const aux = origin.unidade;

      origin.dataEntrada = dtIn;
      origin.horaEntrada = hrIn;
      origin.dataSaida = null;
      origin.horaSaida = null;
      origin.unidade = paciente.unidadeSaudeDestino;
      origin.unidadeSaudeOrigem = aux;
      origin.unidadeSaudeDestino = '';
      origin.numProntuarioOrigem = origin.numProntuario;
      origin.numProntuario = '';
      origin.entradaAtraves = 'transferencia';
      origin.statusRegistro = 'Cadastrado';

      let imgPrincipalNew = null;
      if (origin.imgPrincipal !== null) {
        imgPrincipalNew = origin.imgPrincipal.toString();
        // origin.imgPrincipal = null;
      }

      // const oringinJSON = JSON.stringify(origin);
      // const dados = JSON.parse(oringinJSON);
      // dados.imgPrincipal = imgPrincipalNew;
      // console.log('dados JSON');
      // console.log(oringinJSON);
      // console.log('dados apos conversao');
      // console.log(dados);
      // 3 - Criar novo registro do paciente em outra unidade
      // const created = await service.create(dados);
      const duplicado = await origin.save();
      console.log('Duplicado');
      console.log(duplicado);
      // const created = await service.create(origin);
      // // duplico o a referencia a imagem do paciente.
      // // Embora sendo o mesmo paciente, quando transferido é gerado um novo ID para o novo registro.
      // // do paciente na unidade que está sendo traferido.
      if (imgPrincipalNew !== null) {
        // Pelo ID da Imagem encontrar o ID do Paciente e duplicar para o novo registro da nova unidade
        // const imgPrincipalPaciente = await service.loadImageById(
        //   imgPrincipalNew,
        // );
        // ID do paciente na unidade de origem
        // const idPacienteUnidadeSaida = imgPrincipalPaciente.paciente.toString();
        // const imgsPaciente = await service.loadImage(idPacienteUnidadeSaida);
        const imgsPaciente = await service.loadImage(idUsuarioUnidadeOrigem);
        for (let index = 0; index < imgsPaciente.length; index += 1) {
          // eslint-disable-next-line no-await-in-loop
          const imgsPacienteUnidadeDestino = await service.uploadImage(
            duplicado._id.toString(),
            imgsPaciente[index].imagens,
          );
          if (index === 0) {
            // Atualizo o campo "imgPrincipal" do novo registro que acabou de ser cadastrado
            // eslint-disable-next-line no-await-in-loop
            const up = await service.update(duplicado._id.toString(), {
              imgPrincipal: imgsPacienteUnidadeDestino._id.toString(),
            });
          }
        }
      }

      // 4 - Atualizo o status e unidade de destino do registro da unidade de origem
      const up = await service.update(id, {
        observacao: paciente.observacao,
        statusRegistro: 'Finalizado',
        unidadeSaudeDestino: paciente.unidadeSaudeDestino,
        dataSaida: paciente.dataEntrada,
        horaSaida: paciente.horaEntrada,
      });

      return response
        .status(201)
        .json({ acknowledge: true, status: 'transferred' });
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível transferir o usuário',
      });
    }
  }
}

export { PacienteController };
