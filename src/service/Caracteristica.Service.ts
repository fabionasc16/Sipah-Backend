import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { TipoCaracteristica } from 'model/TipoCaracteristica.model';
import { inject, injectable } from 'tsyringe';

import { ICaracteristicaRepository } from '../repository/ICaracteristicaRepository';

@injectable()
class CaracteristicaService {
  constructor(
    @inject('CaracteristicaRepository')
    private caracteristicaRepository: ICaracteristicaRepository,
  ) {}

  async create(name: string, tipoCaracteristicas): Promise<any> {
    if (!name) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: Nome da Característica`,
      );
    }

    const caracteristicaExists =
      await this.caracteristicaRepository.listByCaracteristica(name);
    if (caracteristicaExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS);
    }

    const caracteristicaCreated = await this.caracteristicaRepository.create(
      name,
    );

    await Promise.all(
      tipoCaracteristicas.map(async tipoCaracteristica => {
        const tipoCaracteristicaCreate = new TipoCaracteristica({
          name: tipoCaracteristica,
          caracteristica: caracteristicaCreated._id,
        });
        await tipoCaracteristicaCreate.save();

        caracteristicaCreated.tipoCaracteristicas.push(
          tipoCaracteristicaCreate,
        );
      }),
    );

    await caracteristicaCreated.save();

    return caracteristicaCreated;
  }

  async list(params: any) {
    return await this.caracteristicaRepository.list(params);
  }

  async listByCaracteristica(name: string) {
    if (!name) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const data = await this.caracteristicaRepository.listByCaracteristica(name);
    if (!data) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }

  async listById(id: string) {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const data = await this.caracteristicaRepository.listById(id);
    if (!data) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Caracteristica`,
      );
    }
    const caracteristica = await this.caracteristicaRepository.listById(id);
    if (!caracteristica) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    await this.caracteristicaRepository.delete(caracteristica._id);
  }

  async update(
    id: string,
    name: any,
    tipoCaracteristicas: any[],
  ): Promise<void> {
    const data: any[] = [];
    if (!id) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: ID de Característica`,
      );
    }

    const caracteristicaId = await this.caracteristicaRepository.listById(id);
    if (!caracteristicaId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (name) {
      caracteristicaId.name = name;
    }

    await Promise.all(
      tipoCaracteristicas.map(async tipos => {
        if (tipos._id) {
          await TipoCaracteristica.findOneAndUpdate(
            {
              _id: tipos._id,
            },
            {
              name: tipos.name,
              caracteristica: tipos.caracteristica,
            },
          );
          data.push(tipos._id);
        } else {
          const saveNew = new TipoCaracteristica({
            name: tipos.name,
            caracteristica: tipos.caracteristica,
          });
          await saveNew.save();
          data.push(saveNew._id);
        }
      }),
    );

    await this.caracteristicaRepository.update(
      caracteristicaId._id,
      caracteristicaId.name,
      data,
    );
  }
}

export { CaracteristicaService };
