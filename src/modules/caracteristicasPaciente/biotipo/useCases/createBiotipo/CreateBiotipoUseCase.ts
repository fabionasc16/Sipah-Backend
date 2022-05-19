import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class CreateBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(biotipo: string): Promise<any> {
    if (!biotipo) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: Descrição do Biotipo`,
      );
    }
    const biotipoExists = await this.biotipoRepository.listByBiotipo(biotipo);
    if (biotipoExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS);
    }

    const biotipoCreated = await this.biotipoRepository.create(biotipo);

    return biotipoCreated;
  }
}

export { CreateBiotipoUseCase };
