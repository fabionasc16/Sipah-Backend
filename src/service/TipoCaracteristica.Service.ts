import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

import { ITipoCaracteristicaRepository } from '../repository/ITipoCaracteristicaRepository';

@injectable()
class TipoCaracteristicaSerice {
  constructor(
    @inject('TipoCaracteristicaRepository')
    private tipoCaracteristicaRepository: ITipoCaracteristicaRepository,
  ) {}

  async create(name: string, id: string): Promise<any> {
    if (!name || !id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: Tipo de Característica`,
      );
    }

    const tipoCaracteristicaExists =
      await this.tipoCaracteristicaRepository.listByTipoCaracteristica(
        name,
        id,
      );

    if (tipoCaracteristicaExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS);
    }

    const tipoCaracteristicaCreated =
      await this.tipoCaracteristicaRepository.create(name, id);

    return tipoCaracteristicaCreated;
  }

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }
    const tipocaracteristica = await this.tipoCaracteristicaRepository.listById(id);
    if (!tipocaracteristica) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    await this.tipoCaracteristicaRepository.delete(id);
  }

  async list(params: any) {
      return await this.tipoCaracteristicaRepository.list(params);
  }

  async listById(id: string) {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const data = await this.tipoCaracteristicaRepository.listById(id);
    if (!data) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }

  async update(id: string, name: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const tipocaracteristicaId = await this.tipoCaracteristicaRepository.listById(id);
    if (!tipocaracteristicaId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (name) {
      tipocaracteristicaId.name = name;
    }

    await this.tipoCaracteristicaRepository.update(
      tipocaracteristicaId._id,
      tipocaracteristicaId.name,
    );
  }

}

export { TipoCaracteristicaSerice };
