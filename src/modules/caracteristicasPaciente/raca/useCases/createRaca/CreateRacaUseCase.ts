import { IRacaRepository } from '@modules/caracteristicasPaciente/raca/repositories/IRacaRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class CreateRacaUseCase {
  constructor(
    @inject('RacaRepository')
    private racaRepository: IRacaRepository,
  ) {}

  async execute(raca_etnia: string): Promise<any> {
    if (!raca_etnia) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: Descrição de Raça/Etnia`,
      );
    }

    const racaExists = await this.racaRepository.listByRacaEtnia(raca_etnia);
    if (racaExists) {
      throw new AppError(Messages.CHARACTERISTICS_NOT_FOUND, 404);
    }

    const racaCreated = await this.racaRepository.create(raca_etnia);

    return racaCreated;
  }
}

export { CreateRacaUseCase };
