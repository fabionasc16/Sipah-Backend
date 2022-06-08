import { AppError } from 'AppError';
import { Messages } from 'messages/Messages';
import { inject, injectable } from 'tsyringe';

import { ICaracteristicaRepository } from '../../repository/ICaracteristicaRepository';

@injectable()
class ListAllCaracteristicaUseCase {
  constructor(
    @inject('CaracteristicaRepository')
    private caracteristicaRepository: ICaracteristicaRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = await this.caracteristicaRepository.list();

    if (data.length === 0) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListAllCaracteristicaUseCase };
