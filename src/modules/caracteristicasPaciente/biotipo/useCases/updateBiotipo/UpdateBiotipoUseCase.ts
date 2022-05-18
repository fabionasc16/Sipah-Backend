import { IBiotipoRepository } from '@modules/caracteristicasPaciente/biotipo/repositories/IBiotipoRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}
  async execute(id: string, bio_tipo: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an botype ID to update data');
    }

    const biotipoId = await this.biotipoRepository.listById(id);
    if (!biotipoId) {
      throw new AppError('Product not found in database', 404);
    }

    if (bio_tipo) {
      biotipoId.bio_tipo = bio_tipo;
    } else {
      throw new AppError('There are not a biotype argument', 404);
    }

    await this.biotipoRepository.update(id, bio_tipo);
  }
}

export { UpdateBiotipoUseCase };
