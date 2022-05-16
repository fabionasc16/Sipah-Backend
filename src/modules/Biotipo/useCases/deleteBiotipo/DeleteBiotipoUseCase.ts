import { IBiotipoRepository } from '@modules/Biotipo/repositories/IBiotipoRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteBiotipoUseCase {
  constructor(
    @inject('BiotipoRepository')
    private biotipoRepository: IBiotipoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const biotipo = await this.biotipoRepository.listById(id);
    if (!biotipo) {
      throw new AppError('Product not found', 404);
    }

    await this.biotipoRepository.delete(id);
  }
}

export { DeleteBiotipoUseCase };
