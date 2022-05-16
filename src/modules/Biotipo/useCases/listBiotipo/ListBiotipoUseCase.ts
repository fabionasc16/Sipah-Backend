import { IBiotipoRepository } from '@modules/Biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListBiotipoUseCase {
  constructor(
    @inject('BiotpoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.biotipoRepository.list();

    if (data == null) {
      throw new AppError('No registered biotype in the database', 404);
    }

    return data;
  }
}

export { ListBiotipoUseCase };
