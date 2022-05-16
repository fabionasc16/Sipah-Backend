import { IRacaRepository } from '@modules/Raca/repositories/IRacaRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteRacaUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const raca = await this.racaRepository.listById(id);
    if (!raca) {
      throw new AppError('Product not found', 404);
    }

    await this.racaRepository.delete(id);
  }
}

export { DeleteRacaUseCase };
