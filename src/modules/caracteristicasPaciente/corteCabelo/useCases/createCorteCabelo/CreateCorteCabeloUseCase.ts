import { ICorteCabeloRepository } from '@modules/caracteristicasPaciente/corteCabelo/repositories/ICorteCabeloRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Messages } from '@shared/messages/Messages';

@injectable()
class CreateCorteCabeloUseCase {
  constructor(
    @inject('CorteCabeloRepository')
    private corteCabeloRepository: ICorteCabeloRepository,
  ) {}

  async execute(corte_cabelo: string): Promise<any> {
    if (!corte_cabelo) {
      throw new AppError(
        `${Messages.MISSING_PARAMETERS}: Tipo de Corte de Cabelo`,
      );
    }

    const corteCabeloExists = await this.corteCabeloRepository.listByHairCut(
      corte_cabelo,
    );

    if (corteCabeloExists) {
      throw new AppError(Messages.CHARACTERISTICS_ALREADY_EXISTS, 404);
    }

    const corteCabeloCreated = await this.corteCabeloRepository.create(
      corte_cabelo,
    );

    return corteCabeloCreated;
  }
}

export { CreateCorteCabeloUseCase };
