import { IRacaRepository } from '@modules/Raca/repositories/IRacaRepository';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateRacaUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}
  async execute(id: string, raca_etnia: string): Promise<void> {
    if (!id) {
      throw new AppError('Provide an  ID to update data');
    }

    const racaId = await this.racaRepository.listById(id);
    if (!racaId) {
      throw new AppError('Product not found in database', 404);
    }

    if (raca_etnia) {
      racaId.raca_etnia = raca_etnia;
    } else {
      throw new AppError('There are not a  argument', 404);
    }

    await this.racaRepository.update(id, raca_etnia);
  }
}

export { UpdateRacaUseCase };
