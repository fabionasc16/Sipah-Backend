import { IBiotipoRepository } from '@modules/Biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListBiotipoByIdUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.biotipoRepository.listById(id);
    if (data == null) {
      throw new AppError('None biotype was found in database!', 404);
    }

    return data;
  }
}

export { ListBiotipoByIdUseCase };
