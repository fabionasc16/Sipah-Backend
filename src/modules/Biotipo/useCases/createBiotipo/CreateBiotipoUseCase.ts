import { IBiotipoRepository } from '@modules/Biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(bio_tipo: string): Promise<any> {
    const biotipoExists = await this.biotipoRepository.list();
    if (biotipoExists) {
      throw new AppError('This hair color already registered!', 404);
    }

    const biotipoCreated = await this.biotipoRepository.create(bio_tipo);

    return biotipoCreated;
  }
}

export { CreateBiotipoUseCase };
