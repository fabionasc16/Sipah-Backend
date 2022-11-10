import mongoose from 'mongoose';

import { Interessado } from '../model/Interassado.model';
import { IInteressadoRepository } from './IInteressadoRepository';

class InteressadoRepository implements IInteressadoRepository {
  // private usuario = usuario;

  async create(interessadoCadastro: any): Promise<any> {
    interessadoCadastro.cpfSemFormatacao = interessadoCadastro.cpf
      .replaceAll('.', '')
      .replaceAll('-', '');
    const cadastroInteressado = await Interessado.create(interessadoCadastro);

    return cadastroInteressado;
  }

  async listByCPF(cpf: string): Promise<any> {
    const data = await Interessado.findOne({
      cpf,
    });
    return data;
  }

  async listById(id: string): Promise<any> {
    const data = await Interessado.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllInteressado(params: any) {
    const page = params.currentPage != null ? `${params.currentPage}` : '1';
    const pageSize = params.perPage != null ? params.perPage : '10';
    const search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = {
        $and: [
          {
            $or: [
              { nome: search },
              { cpf: search },
              { cpfSemFormatacao: search },
              { idPaciente: search },
            ],
          },
          { excluido: false },
        ],
      };
    }

    const total = await Interessado.countDocuments(filters);
    const pageNumber = (await parseInt(page)) - 1;
    const pageSizeNumber = await parseInt(pageSize);

    const data = await Interessado.find(
      filters,
      ' nome grauParentesco telefone cpf municipio created_at idPaciente ',
      {
        skip: pageNumber * pageSizeNumber,
        limit: pageSizeNumber,
        sort: { status: -1, nome: 1 },
      },
    ).populate('idPaciente');

    const result = await {
      currentPage: page,
      perPage: pageSize,
      total,
      data,
    };

    const data_a = await Interessado.find(filters, 'tipoCaracteristicas', {
      skip: pageNumber * pageSizeNumber,
      limit: pageSizeNumber,
    }).populate('idPaciente');

    return result;
  }

  async delete(id: string): Promise<void> {
    return await Interessado.findByIdAndUpdate({ _id: id }, { excluido: true });
  }

  async update(id: string, data: any): Promise<void> {
    data.updated_at = new Date();
    await Interessado.findByIdAndUpdate({ _id: id }, data);
  }

  async adcionarIdPaciente(idPaciente: string, interessado: any): Promise<any> {
    interessado.idPaciente = idPaciente;
    return await Interessado.create(interessado);
  }

  /* async mudarStatus(id: string): Promise<void> {
    let interessadoEncontrado = await Interessado.findById({ _id: id });
    let status = !interessadoEncontrado.status;
    await Interessado.findByIdAndUpdate(
      { _id: id },
      { status }

    );
    return await Interessado.findById({ _id: id });
  } */
}

export { InteressadoRepository };
