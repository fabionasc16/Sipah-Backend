import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class ListBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = await this.biotipoRepository.list();

    if (data.length === 0) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    return data;
  }
}

export { ListBiotipoUseCase };
