import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

import { ITipoCaracteristicaRepository } from './ITipoCaracteristicaRepository';

@injectable()
class CreateTipoCaracteristicaUseCase {
  constructor(
    @inject('TipoCaracteristicaRepository')
    private tipoCaracteristicaRepository: ITipoCaracteristicaRepository,
  ) {}

  async execute(name: string, id: string): Promise<any> {
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
}

export { CreateTipoCaracteristicaUseCase };
