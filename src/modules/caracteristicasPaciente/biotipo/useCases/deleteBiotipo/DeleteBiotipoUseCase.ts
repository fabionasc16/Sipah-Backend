import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class DeleteBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID de Biotipo`);
    }
    const biotipo = await this.biotipoRepository.listById(id);
    if (!biotipo) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    await this.biotipoRepository.delete(biotipo._id);
  }
}

export { DeleteBiotipoUseCase };
