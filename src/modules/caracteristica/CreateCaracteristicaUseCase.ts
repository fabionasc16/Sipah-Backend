import { TipoCaracteristica } from '@modules/tipoCaracteristica/TipoCaracteristica.model';
import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

import { ICaracteristicaRepository } from './ICaracteristicaRepository';

@injectable()
class CreateCaracteristicaUseCase {
  constructor(
    @inject('CaracteristicaRepository')
    private caracteristicaRepository: ICaracteristicaRepository,
  ) {}

  async execute(name: string, tipoCaracteristicas): Promise<any> {
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
          ...tipoCaracteristica,
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
}

export { CreateCaracteristicaUseCase };
