import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class ListBiotipoByIdUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}`, 400);
    }

    const data = await this.biotipoRepository.listById(id);
    if (!data) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListBiotipoByIdUseCase };
