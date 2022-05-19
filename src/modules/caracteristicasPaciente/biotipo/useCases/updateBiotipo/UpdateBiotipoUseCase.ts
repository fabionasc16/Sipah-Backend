import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class UpdateBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}
  async execute(id: string, biotipo: string): Promise<void> {
    if (!id) {
      throw new AppError(`${Messages.MISSING_PARAMETERS}: ID do Biotipo`, 400);
    }

    const biotipoId = await this.biotipoRepository.listById(id);
    if (!biotipoId) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    if (biotipo) {
      biotipoId.biotipo = biotipo;
    }

    await this.biotipoRepository.update(biotipoId._id, biotipoId.biotipo);
  }
}

export { UpdateBiotipoUseCase };
