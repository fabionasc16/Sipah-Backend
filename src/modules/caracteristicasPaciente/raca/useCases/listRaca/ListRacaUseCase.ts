import { IRacaRepository } from '@modules/caracteristicasPaciente/raca/repositories/IRacaRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class ListRacaUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}

  async execute(): Promise<any[]> {
    const data = this.racaRepository.list();

    if (data == null) {
      throw new AppError('No registered  in the database', 404);
    }

    return data;
  }
}

export { ListRacaUseCase };
