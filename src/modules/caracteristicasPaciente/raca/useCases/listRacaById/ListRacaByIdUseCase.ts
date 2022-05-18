import { IRacaRepository } from '@modules/caracteristicasPaciente/raca/repositories/IRacaRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListRacaByIdUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError('Please, to add a Id in query argument!', 400);
    }

    const data = await this.racaRepository.listById(id);
    if (data == null) {
      throw new AppError('None Hair Color was found in database!', 404);
    }

    return data;
  }
}

export { ListRacaByIdUseCase };
