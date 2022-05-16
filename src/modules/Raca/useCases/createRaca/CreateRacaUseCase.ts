import { IRacaRepository } from '@modules/Raca/repositories/IRacaRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateRacaUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}

  async execute(raca_etnia: string): Promise<any> {
    const racaExists = await this.racaRepository.listByHairColor(
      raca_etnia,
    );
    if (racaExists) {
      throw new AppError('This  already registered!', 404);
    }

    const racaCreated = await this.racaRepository.create(raca_etnia);

    return racaCreated;
  }
}

export { CreateRacaUseCase };
